import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  constructor(private http: HttpClient) {}

  getCards(offset = 0) {
    const params = {
      num: 100,
      offset,
    };
    return this.http.get<Card[]>(this.API_URL, { params }).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
}
