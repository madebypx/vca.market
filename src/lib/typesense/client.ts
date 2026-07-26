import Typesense from 'typesense';

export const typesenseClient = new Typesense.Client({
  nodes: [
    {
      host: process.env.NEXT_PUBLIC_TYPESENSE_HOST || 'localhost',
      port: parseInt(process.env.NEXT_PUBLIC_TYPESENSE_PORT || '8108', 10),
      protocol: process.env.NEXT_PUBLIC_TYPESENSE_PROTOCOL || 'http',
    },
  ],
  apiKey: process.env.TYPESENSE_API_KEY || 'xyz-typesense-api-key',
  connectionTimeoutSeconds: 2,
});

export const LISTINGS_SCHEMA = {
  name: 'listings',
  fields: [
    { name: 'id', type: 'string' },
    { name: 'title', type: 'string' },
    { name: 'category_id', type: 'string', facet: true },
    { name: 'neighborhood', type: 'string', facet: true },
    { name: 'price', type: 'float', facet: true },
    { name: 'status', type: 'string', facet: true },
    { name: 'created_at', type: 'int64' },
  ],
  default_sorting_field: 'created_at',
};
