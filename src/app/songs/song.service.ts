import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  songsUrl = 'api/songs';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


}
