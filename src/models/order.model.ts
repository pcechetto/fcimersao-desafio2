//import { Prisma } from '@prisma/client';

export interface Order {
  id?: number;
  asset_id: number;
  price: number;
  status?: 'open' | 'pending' | 'closed';
}
