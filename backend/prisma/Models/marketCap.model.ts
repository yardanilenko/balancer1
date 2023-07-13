import { Prisma } from '@prisma/client';

export class MarketCap implements Prisma.MarketCapCreateInput {
  date: Date;
  currency: string;
  rate: number;
}
