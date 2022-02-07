import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './modules/cards/cards.module';
import { PlayersModule } from './modules/players/players.module';

@Module({
  imports: [CardsModule, PlayersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
