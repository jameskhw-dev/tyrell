import { Injectable } from '@nestjs/common';
import { shapes } from 'src/constants/shapes.contants';

@Injectable()
export class CardsService {
  private decks: string[] = [];
  private numberOfCardsPerShape = 13;
  private initialized = false;

  public initDeck(): string[] {
    this.initialized = false;
    const decks: string[] = [];
    this.decks = [];
    for (const shape in shapes) {
      for (let i = 1; i <= this.numberOfCardsPerShape; i++) {
        decks.push(shape + '-' + this.printCard(i));
      }
    }
    this.decks = decks;
    this.initialized = true;

    return this.decks;
  }

  public isDeckInitialzed(): boolean {
    return this.initialized;
  }

  private printCard(n: number): string {
    let newCard: string;
    switch (n) {
      case 11:
        newCard = 'J';
        break;
      case 12:
        newCard = 'Q';
        break;
      case 13:
        newCard = 'K';
        break;
      case 1:
        newCard = 'A';
        break;
      default:
        newCard = n.toString();
    }

    return newCard;
  }

  public deckCount() {
    return this.decks.length;
  }

  public shuffle() {
    this.decks.sort(() => Math.random() - 0.5);
    return this.decks;
  }

  public returnDeck() {
    return this.decks;
  }

  public drawCard() {
    const drawnCard = this.decks.shift();
    return drawnCard;
  }
}
