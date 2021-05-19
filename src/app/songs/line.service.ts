import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { Line } from './Line';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  private linesUrl = 'api/lines';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  /** Get lines from the server */
  getLines(): Observable<Line[]> {
    return this.http.get<Line[]>(this.linesUrl);
  }
}
