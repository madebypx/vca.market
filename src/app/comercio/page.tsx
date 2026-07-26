'use client';

import { useState, useMemo } from 'react';
import { MOCK_PRODUTOS } from '@/data/mockComercio';
import { ComercioFilterBar } from '@/components/comercio/ComercioFilterBar';
import { ProdutoCard } from '@/components/comercio/ProdutoCard';

export default function ComercioPage() {
  const [category, setCategory] = useState('todos');
  const [condition, setCondition] = useState('todos');
  const [pickupOnly, setPickupOnly] = useState(false);
  const [physicalStoreOnly, setPhysicalStoreOnly] = useState(false);

  // Filter Logic
  const filteredProdutos = useMemo(() => {
    return MOCK_PRODUTOS.filter((item) => {
      if (category !== 'todos' && item.category !== category) return false;
      if (condition !== 'todos' && item.condition !== condition) return false;
      if (pickupOnly && !item.pickupLocation) return false;
      if (physicalStoreOnly && !item.isPhysicalStore) return false;
      return true;
    });
  }, [category, condition, pickupOnly, physicalStoreOnly]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      {/* Page Header */}
      <div className="bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 py-6 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comércio & Lojas Locais de Vitória da Conquista
          </h1>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Ofertas de eletrônicos, moda, móveis e utilidades em lojistas do Centro, Bairro Brasil e shoppings de VCA.
          </p>
        </div>
      </div>

      {/* Technical Filter Bar */}
      <ComercioFilterBar
        category={category}
        setCategory={setCategory}
        condition={condition}
        setCondition={setCondition}
        pickupOnly={pickupOnly}
        setPickupOnly={setPickupOnly}
        physicalStoreOnly={physicalStoreOnly}
        setPhysicalStoreOnly={setPhysicalStoreOnly}
        resultsCount={filteredProdutos.length}
      />

      {/* Main Grid Container */}
      <div className="container mx-auto flex-1 p-4 md:p-6">
        {filteredProdutos.length === 0 ? (
          /* Actionable Empty State */
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center border border-slate-200 dark:border-slate-700 max-w-lg mx-auto my-12 shadow-xs">
            <div className="text-4xl mb-3">🛍️</div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              Nenhuma oferta encontrada para esses critérios
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Tente selecionar a opção &quot;Todas Ofertas&quot; ou desmarcar a exigência de loja física.
            </p>
            <button
              onClick={() => {
                setCategory('todos');
                setCondition('todos');
                setPickupOnly(false);
                setPhysicalStoreOnly(false);
              }}
              className="bg-[var(--color-primary)] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-slate-800 transition-colors"
            >
              Limpar Filtros de Ofertas
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProdutos.map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
