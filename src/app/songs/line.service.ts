import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { Line } from './Line';
import { catchError, tap, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  private linesUrl = 'api/lines';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  private log(message: string): void {
    this.messageService.add(`LineService: ${message}`);
  }

  /**
   * Handle Http operatio that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Get lines from the server */
  getLines(): Observable<Line[]> {
    return this.http.get<Line[]>(this.linesUrl)
    .pipe(
      tap(_ => this.log('fetched lines')),
      catchError(this.handleError<Line[]>(`getLines`, []))
    );
  }

  /** Get lines form one song by songId */
  getLinesFromSong(id: string): Observable<Line[]> {
    return this.http.get<Line[]>(this.linesUrl)
    .pipe(
      map(lines => lines.filter(line => line.songId === id) ),
      tap(_ => this.log(`fetched lines from ${id} song`)),
      catchError(this.handleError<Line[]>(`getLinesFromSong`, []))
    );
  }

  /** Get song by id. Will 404 if id not found */
  getSong(id: string): Observable<Line> {
    const url = `${this.linesUrl}/${id}`;
    return this.http.get<Line>(url).pipe(
      tap(_ => this.log(`fetched song id=${id}`)),
      catchError(this.handleError<Line>(`getSong id =${id}`))
    );
  }
}
