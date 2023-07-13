import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from '../prisma/prisma.service';
import { MarketCap } from '../prisma/Models/marketCap.model';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class MarketCapService {
  constructor(private readonly prisma: PrismaService) { }

  @Cron('*/30 * * * *')
  async fetchAndSaveMarketCap(): Promise<any> {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,binance-usd,tether,usd-coin,dai&vs_currencies=usd`
      );
      const marketCapData: { [key: string]: { usd: number; }; } = response.data;

      const marketCapEntries: MarketCap[] = Object.entries(marketCapData).map(([currency, data]) => ({
        date: new Date(),
        currency,
        rate: data.usd,
      }));

      await this.prisma.marketCap.deleteMany();
      await this.prisma.marketCap.createMany({
        data: marketCapEntries,
      });

      console.log(marketCapData);
      const marketCapDataJson = JSON.stringify(marketCapData);
      return marketCapDataJson;
    } catch (error) {
      console.error('Error fetching and saving market cap:', error);
      throw error;
    }
  }
}