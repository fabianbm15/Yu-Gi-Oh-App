import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cards: Card[] = [];
  constructor(private cardService: CardService) {}
  ngOnInit(): void {
    this.cardService.getCards().subscribe((res) => {
      console.log(res);
      this.cards = res;
    });
  }
}
