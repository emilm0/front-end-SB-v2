import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { Song } from './song';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  songsUrl = 'api/songs';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  /** Message for user about app */
  private log(message: string): void {
    this.messageService.add(`SongService: ${message}`);
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

  /** GET songs from the server  */
  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songsUrl)
    .pipe(
      tap(_ => this.log('fetched songs')),
      catchError(this.handleError<Song[]>('getSongs', []))
    );
  }

  /** GET song by id. Will 404 if id not found */
  getSong(id: string): Observable<Song> {
    const url = `${this.songsUrl}/${id}`;
    return this.http.get<Song>(url).pipe(
      tap(_ => this.log(`fetched song id=${id}`)),
      catchError(this.handleError<Song>(`getSong id =${id}`))
    );
  }
}
