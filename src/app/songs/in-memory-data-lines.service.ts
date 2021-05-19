import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Line } from './Line';
import { SongPartsName } from './SongPartsName';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataSongsService implements InMemoryDbService {

  createDb(): any {
    const lines = [
      {
        id: 1,
        idSong: 'A1',
        plText: 'textPl-Intro1-Line1',
        chords: 'BasicChords-Intro1-Line1',
        textOriginal: 'OriginalText-Intro1-Line1',
        chordsOriginal: 'OriginalChords-Intro1-Line1',
        songPartName: SongPartsName.Intro,
        songPartNumber: 1,
        linePosition: 1
      },

      {
        id: 2,
        idSong: 'A1',
        plText: 'textPl-Intro1-Line2',
        chords: 'BasicChords-Intro1-Line2',
        textOriginal: 'OriginalText-Intro1-Line2',
        chordsOriginal: 'OriginalChords-Intro1-Line2',
        songPartName: SongPartsName.Intro,
        songPartNumber: 1,
        linePosition: 2
      },

      {
        id: 3,
        idSong: 'A1',
        plText: 'textPl-Stanza1-Line1',
        chords: 'BasicChords-Stanza1-Line1',
        textOriginal: 'OriginalText-Stanza1-Line1',
        chordsOriginal: 'OriginalChords-Stanza1-Line1',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 1,
        linePosition: 1
      },

      {
        id: 4,
        idSong: 'A1',
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
        idSong: 'A1',
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
        idSong: 'A1',
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
        idSong: 'A1',
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
        idSong: 'A1',
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
        idSong: 'A1',
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
        idSong: 'A1',
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
        idSong: 'A1',
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
        idSong: 'A1',
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
        idSong: 'A1',
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
        idSong: 'A1',
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
        idSong: 'A1',
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
        idSong: 'A1',
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
        idSong: 'A1',
        textPl: 'textPl-Bridge1-Line2',
        chords: 'BasicChords-Bridge1-Line2',
        textOriginal: 'OriginalText-Bridge1-Line2',
        chordsOriginal: 'OriginalChords-Bridge1-Line2',
        songPartName: SongPartsName.Bridge,
        songPartNumber: 1,
        linePosition: 2
      },
    ];

    return { lines };
  }

  genId(lines: Line[]): number {
    return lines.length > 0 ? Math.max(...lines.map(line => line.id)) + 1 : 1;
  }
}
