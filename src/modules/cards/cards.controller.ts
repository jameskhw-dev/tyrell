import { Controller, Get } from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CardsService } from './cards.service';

@ApiTags('Decks')
@Controller('cards')
export class CardsController {
  constructor(private readonly cardService: CardsService) {}

  @Get('init')
  @ApiConsumes('application/x-www-form-urlencoded')
  public initDeck() {
    return this.cardService.initDeck();
  }

  @Get('count')
  @ApiConsumes('application/x-www-form-urlencoded')
  public getDectCount() {
    return this.cardService.deckCount();
  }

  @Get('shuffle')
  @ApiConsumes('application/x-www-form-urlencoded')
  public shuffle() {
    return this.cardService.shuffle();
  }

  @Get('all')
  @ApiConsumes('application/x-www-form-urlencoded')
  public getDecks() {
    return this.cardService.returnDeck();
  }
}
