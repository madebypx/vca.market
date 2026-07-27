'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ImovelItem } from '@/data/mockImoveis';

interface RealLeafletMapProps {
  imoveis: ImovelItem[];
  hoveredId: string | null;
  onHoverPin: (id: string | null) => void;
}

export function RealLeafletMap({ imoveis, hoveredId, onHoverPin }: RealLeafletMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});

  // 1. Initialize Leaflet Map once on mount
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [-14.8620, -40.8360],
      zoom: 14,
      zoomControl: false,
    });

    L.control.zoom({ position: 'topright' }).addTo(map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    mapInstanceRef.current = map;

    // Invalidate size after mount to ensure 100% tile rendering
    setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // 2. Manage Markers ONLY when property list (`imoveis`) changes (NOT on hover)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Remove existing markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    if (imoveis.length === 0) return;

    imoveis.forEach((imovel) => {
      const formattedPrice = imovel.transactionType === 'venda'
        ? `R$ ${(imovel.price / 1000).toLocaleString('pt-BR')}k`
        : `R$ ${imovel.price.toLocaleString('pt-BR')}/mês`;

      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div id="marker-${imovel.id}" class="airbnb-pill-marker">
            <span class="pill-text">${formattedPrice}</span>
          </div>
        `,
        iconSize: [80, 32],
        iconAnchor: [40, 16],
      });

      const marker = L.marker([imovel.lat, imovel.lng], { icon: customIcon }).addTo(map);

      // Hover events
      marker.on('mouseover', () => onHoverPin(imovel.id));
      marker.on('mouseout', () => onHoverPin(null));

      // Rich popup content
      const popupHtml = `
        <div class="vca-map-popup">
          <div class="popup-img-wrap">
            <img src="${imovel.imageUrl}" alt="${imovel.title}" />
          </div>
          <div class="popup-info">
            <span class="popup-badge">${imovel.propertyType.toUpperCase()} • ${imovel.transactionType.toUpperCase()}</span>
            <h4 class="popup-title">${imovel.title}</h4>
            <div class="popup-price">R$ ${imovel.price.toLocaleString('pt-BR')}</div>
            <div class="popup-specs">📍 ${imovel.neighborhood} • 📐 ${imovel.usableAreaM2}m²</div>
            <a href="/imoveis/${imovel.id}" class="popup-cta" onclick="event.stopPropagation()">Ver Imóvel Completo →</a>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, {
        closeButton: true,
        maxWidth: 240,
        className: 'vca-custom-popup',
      });

      markersRef.current[imovel.id] = marker;
    });

    // Fit map bounds to show all markers when list changes
    const bounds = L.latLngBounds(imoveis.map((item) => [item.lat, item.lng]));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
  }, [imoveis, onHoverPin]);

  // 3. Smoothly update marker CSS class when `hoveredId` changes (without recreating markers/map)
  useEffect(() => {
    Object.entries(markersRef.current).forEach(([id, marker]) => {
      const el = document.getElementById(`marker-${id}`);
      if (!el) return;

      const isHovered = hoveredId === id;
      if (isHovered) {
        el.classList.add('active');
        marker.setZIndexOffset(1000);
      } else {
        el.classList.remove('active');
        marker.setZIndexOffset(0);
      }
    });
  }, [hoveredId]);

  return <div ref={mapContainerRef} className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden z-0" />;
}
