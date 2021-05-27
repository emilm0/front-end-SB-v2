import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SongPartsName } from './songs/SongPartsName';
import { Meeting } from './meetings/meeting';
import { SongGroup } from './songs/SongGroup';
import { SongType } from './songs/SongType';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(): any {
    const meetings = [
      { id: 1, author: 'Janusz', meetingDate: new Date(), addingDate: new Date()  },
      { id: 2, author: 'Grażyna', meetingDate: new Date(), addingDate: new Date() },
      { id: 3, author: 'Bolek', meetingDate: new Date(), addingDate: new Date() },
      { id: 4, author: 'Fred', meetingDate: new Date(), addingDate: new Date() },
    ];

    const songs = [
      { id: 'A1', titlePl: 'AA11', titleOrigin: 'tytyuł oryginalny', key: 'A', keyOrigin: 'E', author: 'Autor', translator: 'Tlumacz',
        tempo: 150, group: SongGroup.Group1, type: SongType.Type1, addTime: new Date(), copyright: 'Prawa autorskie', basedOn: 'Na podstawie',
        linkPl: 'Link Pl', linkOrigin: 'Link oryginalny', linkToDrive: 'Link do dysku', linkToNotes: 'Link do nut', editTime: new Date(),
        editorName: 'Edytor', editContent: 'Treść edycji', isReadyToUse: true, isInUse: false, timesOfUse: 4 },
      { id: 'A2', titlePl: 'AA22' },
      { id: 'A3', titlePl: 'AA33' },
      { id: 'B1', titlePl: 'BB11' },
      { id: 'B2', titlePl: 'BB22' },
      { id: 'B3', titlePl: 'BB33' },
      { id: 'C1', titlePl: 'CC11' },
      { id: 'C2', titlePl: 'CC22' },
      { id: 'C3', titlePl: 'CC33' },
      { id: 'C4', titlePl: 'CC44' },
      { id: 'C5', titlePl: 'CC55' },
      { id: 'C6', titlePl: 'CC66' },
      { id: 'D1', titlePl: 'DD11' },
      { id: 'D2', titlePl: 'DD22' },
      { id: 'D3', titlePl: 'DD33' },
      { id: 'D4', titlePl: 'DD44' },
      { id: 'D5', titlePl: 'DD55' }
    ];

    const lines = [
      {
        id: 1,
        songId: 'A1',
        textPl: 'textPl-Intro1-Line1',
        chords: 'BasicChords-Intro1-Line1',
        textOriginal: 'OriginalText-Intro1-Line1',
        chordsOriginal: 'OriginalChords-Intro1-Line1',
        songPartName: SongPartsName.Intro,
        songPartNumber: 1,
        linePosition: 1
      },

      {
        id: 2,
        songId: 'A1',
        textPl: 'textPl-Intro1-Line2',
        chords: 'BasicChords-Intro1-Line2',
        textOriginal: 'OriginalText-Intro1-Line2',
        chordsOriginal: 'OriginalChords-Intro1-Line2',
        songPartName: SongPartsName.Intro,
        songPartNumber: 1,
        linePosition: 2
      },

      {
        id: 3,
        songId: 'A1',
        textPl: 'textPl-Stanza1-Line1',
        chords: 'BasicChords-Stanza1-Line1',
        textOriginal: 'OriginalText-Stanza1-Line1',
        chordsOriginal: 'OriginalChords-Stanza1-Line1',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 1,
        linePosition: 1
      },

      {
        id: 4,
        songId: 'A1',
        textPl: 'textPl-Stanza1-Line2',
        chords: 'BasicChords-Stanza1-Line2',
        textOriginal: 'OriginalText-Stanza1-Line2',
        chordsOriginal: 'OriginalChords-Stanza1-Line2',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 1,
        linePosition: 2
      },

      {
        id: 5,
        songId: 'A1',
        textPl: 'textPl-Stanza1-Line3',
        chords: 'BasicChords-Stanza1-Line3',
        textOriginal: 'OriginalText-Stanza1-Line3',
        chordsOriginal: 'OriginalChords-Stanza1-Line3',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 1,
        linePosition: 3
      },

      {
        id: 6,
        songId: 'A1',
        textPl: 'textPl-Refrain1-Line1',
        chords: 'BasicChords-Refrain1-Line1',
        textOriginal: 'OriginalText-Refrain1-Line1',
        chordsOriginal: 'OriginalChords-Refrain1-Line1',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        linePosition: 1
      },

      {
        id: 7,
        songId: 'A1',
        textPl: 'textPl-Refrain1-Line2',
        chords: 'BasicChords-Refrain1-Line2',
        textOriginal: 'OriginalText-Refrain1-Line2',
        chordsOriginal: 'OriginalChords-Refrain1-Line2',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        linePosition: 2
      },

      {
        id: 8,
        songId: 'A1',
        textPl: 'textPl-Refrain1-Line3',
        chords: 'BasicChords-Refrain1-Line3',
        textOriginal: 'OriginalText-Refrain1-Line3',
        chordsOriginal: 'OriginalChords-Refrain1-Line3',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        linePosition: 3
      },

      {
        id: 9,
        songId: 'A1',
        textPl: 'textPl-Refrain1-Line4',
        chords: 'BasicChords-Refrain1-Line4',
        textOriginal: 'OriginalText-Refrain1-Line4',
        chordsOriginal: 'OriginalChords-Refrain1-Line4',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        linePosition: 4
      },

      {
        id: 10,
        songId: 'A1',
        textPl: 'textPl-Stanza2-Line1',
        chords: 'BasicChords-Stanza2-Line1',
        textOriginal: 'OriginalText-Stanza2-Line1',
        chordsOriginal: 'OriginalChords-Stanza2-Line1',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 2,
        linePosition: 1
      },

      {
        id: 11,
        songId: 'A1',
        textPl: 'textPl-Stanza2-Line2',
        chords: 'BasicChords-Stanza2-Line2',
        textOriginal: 'OriginalText-Stanza2-Line2',
        chordsOriginal: 'OriginalChords-Stanza2-Line2',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 2,
        linePosition: 2
      },

      {
        id: 12,
        songId: 'A1',
        textPl: 'textPl-Stanza1-Line3',
        chords: 'BasicChords-Stanza1-Line3',
        textOriginal: 'OriginalText-Stanza1-Line3',
        chordsOriginal: 'OriginalChords-Stanza1-Line3',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 2,
        linePosition: 3
      },

      {
        id: 13,
        songId: 'A1',
        textPl: 'textPl-Stanza3-Line1',
        chords: 'BasicChords-Stanza3-Line1',
        textOriginal: 'OriginalText-Stanza3-Line1',
        chordsOriginal: 'OriginalChords-Stanza3-Line1',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 3,
        linePosition: 1
      },

      {
        id: 14,
        songId: 'A1',
        textPl: 'textPl-Stanza3-Line2',
        chords: 'BasicChords-Stanza3-Line2',
        textOriginal: 'OriginalText-Stanza3-Line2',
        chordsOriginal: 'OriginalChords-Stanza3-Line2',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 3,
        linePosition: 2
      },

      {
        id: 15,
        songId: 'A1',
        textPl: 'textPl-Stanza3-Line3',
        chords: 'BasicChords-Stanza3-Line3',
        textOriginal: 'OriginalText-Stanza3-Line3',
        chordsOriginal: 'OriginalChords-Stanza3-Line3',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 3,
        linePosition: 3
      },

      {
        id: 16,
        songId: 'A1',
        textPl: 'textPl-Bridge1-Line1',
        chords: 'BasicChords-Bridge1-Line1',
        textOriginal: 'OriginalText-Bridge1-Line1',
        chordsOriginal: 'OriginalChords-Bridge1-Line1',
        songPartName: SongPartsName.Bridge,
        songPartNumber: 1,
        linePosition: 1
      },

      {
        id: 17,
        songId: 'A1',
        textPl: 'textPl-Bridge1-Line2',
        chords: 'BasicChords-Bridge1-Line2',
        textOriginal: 'OriginalText-Bridge1-Line2',
        chordsOriginal: 'OriginalChords-Bridge1-Line2',
        songPartName: SongPartsName.Bridge,
        songPartNumber: 1,
        linePosition: 2
      },

      {
        id: 18,
        songId: 'B1',
        textPl: 'textPl-Intro1-Line1',
        chords: 'BasicChords-Intro1-Line1',
        textOriginal: 'OriginalText-Intro1-Line1',
        chordsOriginal: 'OriginalChords-Intro1-Line1',
        songPartName: SongPartsName.Intro,
        songPartNumber: 1,
        linePosition: 1
      },

      {
        id: 19,
        songId: 'B1',
        textPl: 'textPl-Intro1-Line2',
        chords: 'BasicChords-Intro1-Line2',
        textOriginal: 'OriginalText-Intro1-Line2',
        chordsOriginal: 'OriginalChords-Intro1-Line2',
        songPartName: SongPartsName.Intro,
        songPartNumber: 1,
        linePosition: 2
      },

      {
        id: 20,
        songId: 'B1',
        textPl: 'textPl-Stanza1-Line1',
        chords: 'BasicChords-Stanza1-Line1',
        textOriginal: 'OriginalText-Stanza1-Line1',
        chordsOriginal: 'OriginalChords-Stanza1-Line1',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 1,
        linePosition: 1
      },

      {
        id: 21,
        songId: 'B1',
        textPl: 'textPl-Stanza1-Line2',
        chords: 'BasicChords-Stanza1-Line2',
        textOriginal: 'OriginalText-Stanza1-Line2',
        chordsOriginal: 'OriginalChords-Stanza1-Line2',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 1,
        linePosition: 2
      },

      {
        id: 22,
        songId: 'B1',
        textPl: 'textPl-Stanza1-Line3',
        chords: 'BasicChords-Stanza1-Line3',
        textOriginal: 'OriginalText-Stanza1-Line3',
        chordsOriginal: 'OriginalChords-Stanza1-Line3',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 1,
        linePosition: 3
      },

      {
        id: 23,
        songId: 'B1',
        textPl: 'textPl-Refrain1-Line1',
        chords: 'BasicChords-Refrain1-Line1',
        textOriginal: 'OriginalText-Refrain1-Line1',
        chordsOriginal: 'OriginalChords-Refrain1-Line1',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        linePosition: 1
      },

      {
        id: 24,
        songId: 'B1',
        textPl: 'textPl-Refrain1-Line2',
        chords: 'BasicChords-Refrain1-Line2',
        textOriginal: 'OriginalText-Refrain1-Line2',
        chordsOriginal: 'OriginalChords-Refrain1-Line2',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        linePosition: 2
      },

      {
        id: 25,
        songId: 'B1',
        textPl: 'textPl-Refrain1-Line3',
        chords: 'BasicChords-Refrain1-Line3',
        textOriginal: 'OriginalText-Refrain1-Line3',
        chordsOriginal: 'OriginalChords-Refrain1-Line3',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        linePosition: 3
      },

      {
        id: 26,
        songId: 'B1',
        textPl: 'textPl-Refrain1-Line4',
        chords: 'BasicChords-Refrain1-Line4',
        textOriginal: 'OriginalText-Refrain1-Line4',
        chordsOriginal: 'OriginalChords-Refrain1-Line4',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        linePosition: 4
      },

      {
        id: 27,
        songId: 'B1',
        textPl: 'textPl-Stanza2-Line1',
        chords: 'BasicChords-Stanza2-Line1',
        textOriginal: 'OriginalText-Stanza2-Line1',
        chordsOriginal: 'OriginalChords-Stanza2-Line1',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 2,
        linePosition: 1
      },

      {
        id: 28,
        songId: 'B1',
        textPl: 'textPl-Stanza2-Line2',
        chords: 'BasicChords-Stanza2-Line2',
        textOriginal: 'OriginalText-Stanza2-Line2',
        chordsOriginal: 'OriginalChords-Stanza2-Line2',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 2,
        linePosition: 2
      },

      {
        id: 29,
        songId: 'B1',
        textPl: 'textPl-Stanza1-Line3',
        chords: 'BasicChords-Stanza1-Line3',
        textOriginal: 'OriginalText-Stanza1-Line3',
        chordsOriginal: 'OriginalChords-Stanza1-Line3',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 2,
        linePosition: 3
      },

      {
        id: 30,
        songId: 'B1',
        textPl: 'textPl-Stanza3-Line1',
        chords: 'BasicChords-Stanza3-Line1',
        textOriginal: 'OriginalText-Stanza3-Line1',
        chordsOriginal: 'OriginalChords-Stanza3-Line1',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 3,
        linePosition: 1
      },

      {
        id: 31,
        songId: 'B1',
        textPl: 'textPl-Stanza3-Line2',
        chords: 'BasicChords-Stanza3-Line2',
        textOriginal: 'OriginalText-Stanza3-Line2',
        chordsOriginal: 'OriginalChords-Stanza3-Line2',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 3,
        linePosition: 2
      },
    ];

    return {meetings, songs, lines};
  }

  genId(meetings: Meeting[]): number {
    return meetings.length > 0 ? Math.max(...meetings.map(meeting => meeting.id)) + 1 : 1;
  }
}
