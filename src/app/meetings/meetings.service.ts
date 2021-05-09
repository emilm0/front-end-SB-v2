import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Meeting } from './meeting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

  private meetingsUrl = 'api/meetings';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'aplication/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a MeetingsService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`MeetingsService: ${message}`);
  }

  /** Get meetings from the server */
  getMeetings(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(this.meetingsUrl)
    .pipe(
      tap(_ => this.log('fetched meetings')),
      catchError(this.handleError<Meeting[]>('getMeetings', []))
    );
  }

  /**
   * Handle http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation thet failed
   * @param result - oprional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.body.error}`);

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }

  /** GET meeting by id. Will 404 if id not found */
  getMeeting(id: number): Observable<Meeting> {
    const url = `${this.meetingsUrl}/${id}`;
    return this.http.get<Meeting>(url).pipe(
      tap(_ => this.log(`fetched meeting id=${id}`)),
      catchError(this.handleError<Meeting>(`getHero id=${id}`))
    );
  }

  /** PUT: update the meeting on the server */
  updateMeeting(meeting: Meeting): Observable<any> {
    return this.http.put(this.meetingsUrl, meeting, this.httpOptions).pipe(
      tap(_ => this.log(`update meeting id=${meeting.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
}
