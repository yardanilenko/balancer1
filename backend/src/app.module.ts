import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketCapController } from './marketCap.controller';
import { MarketCapService } from './MarketCapService';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [AppController, MarketCapController],
  providers: [AppService, MarketCapService, PrismaService],
})
export class AppModule {}
