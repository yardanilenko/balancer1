import { Controller, Get } from '@nestjs/common';
import { MarketCapService } from './MarketCapService';

@Controller('api/marketCap')
export class MarketCapController {
  constructor(private readonly marketCapService: MarketCapService) {}

  @Get()
  async getMarketCap(): Promise<string> {
    const marketCapData = await this.marketCapService.fetchAndSaveMarketCap();
    return marketCapData;
  }
}
