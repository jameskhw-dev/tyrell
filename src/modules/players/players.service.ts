import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { player } from 'src/objects/players.objects';
import { CardsService } from '../cards/cards.service';

@Injectable()
export class PlayersService {
  constructor(private readonly cardSerice: CardsService) {}

  private players: player[] = [];

  public setPlayer(n: number) {
    if (n <= 0) {
      throw new UnprocessableEntityException(
        {
          message: 'Number of player must be greater than 0',
        },
        'Number of player must be greater than 0',
      );
    }
    this.players = [];
    for (let i = 1; i <= n; i++) {
      this.players.push({
        name: `Player ${i}`,
        cards: [],
      });
    }

    return this.players;
  }

  public getPlayerCount(): number {
    return this.players.length;
  }

  public getPlayers() {
    return this.players;
  }

  public distribute(times = 0) {
    if (this.cardSerice.isDeckInitialzed() == false) {
      this.cardSerice.initDeck();
      this.cardSerice.shuffle();
    }
    for (let i = 0; i < times; i++) {
      this.players.forEach((player) => {
        const drawnCard = this.cardSerice.drawCard();
        if (drawnCard != null) player.cards.push(drawnCard);
        else return;
      });
      if (this.cardSerice.deckCount() == 0) break;
    }

    return this.players;
  }

  public distributeAll() {
    if (this.cardSerice.isDeckInitialzed() == false) {
      this.cardSerice.initDeck();
      this.cardSerice.shuffle();
    }
    while (this.cardSerice.deckCount() > 0) {
      this.players.forEach((player) => {
        const drawnCard = this.cardSerice.drawCard();
        if (drawnCard != null) player.cards.push(drawnCard);
        else return;
      });
    }

    return this.players;
  }

  public returnCards() {
    this.players.forEach((player) => {
      player.cards = [];
    });
    this.cardSerice.initDeck();
  }
}
