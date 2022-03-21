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
        textPl: 'textPl-I1-L1',
        chords: 'A   D     G    H-I1-L1',
        textOrigin: 'OriginText-I1-L1',
        chordsOrigin: 'C    D   F     G-I1-L1',
        songPartName: SongPartsName.Intro,
        songPartNumber: 1,
        lPosition: 1
      },

      {
        id: 2,
        songId: 'A1',
        textPl: 'textPl-I1-L2',
        chords: 'A   D     G    H-I1-L2',
        textOrigin: 'OriginText-I1-L2',
        chordsOrigin: 'C    D   F     G-I1-L2',
        songPartName: SongPartsName.Intro,
        songPartNumber: 1,
        lPosition: 2
      },

      {
        id: 3,
        songId: 'A1',
        textPl: 'textPl-S1-L1',
        chords: 'A   D     G    H S1 L1',
        textOrigin: 'OriginText-S1-L1',
        chordsOrigin: 'C    D   F     G-S1-L1',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 1,
        lPosition: 1
      },

      {
        id: 4,
        songId: 'A1',
        textPl: 'textPl-S1-L2',
        chords: 'A   D     G    H S1 L2',
        textOrigin: 'OriginText-S1-L2',
        chordsOrigin: 'C    D   F     G-S1-L2',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 1,
        lPosition: 2
      },

      {
        id: 5,
        songId: 'A1',
        textPl: 'textPl-S1-L3',
        chords: 'A   D     G    H S1 L3',
        textOrigin: 'OriginText-S1-L3',
        chordsOrigin: 'C    D   F     G S1 L3',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 1,
        lPosition: 3
      },

      {
        id: 6,
        songId: 'A1',
        textPl: 'textPl-R1-L1',
        chords: 'A   D     G    H-R1 L1',
        textOrigin: 'OriginText-R1 L1',
        chordsOrigin: 'C    D   F     G-R1-L1',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        lPosition: 1
      },

      {
        id: 7,
        songId: 'A1',
        textPl: 'textPl-R1-L2',
        chords: 'A   D     G    H-R1-L2',
        textOrigin: 'OriginText-R1-L2',
        chordsOrigin: 'C    D   F     G-R1-L2',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        lPosition: 2
      },

      {
        id: 8,
        songId: 'A1',
        textPl: 'textPl-R1-L3',
        chords: 'A   D     G    H-R1-L3',
        textOrigin: 'OriginText-R1-L3',
        chordsOrigin: 'C    D   F     G-R1-L3',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        lPosition: 3
      },

      {
        id: 9,
        songId: 'A1',
        textPl: 'textPl-R1-L4',
        chords: 'A   D     G    H-R1-L4',
        textOrigin: 'OriginText-R1-L4',
        chordsOrigin: 'C    D   F     G-R1-L4',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        lPosition: 4
      },

      {
        id: 10,
        songId: 'A1',
        textPl: 'textPl-S2-L1',
        chords: 'A   D     G    H-S2-L1',
        textOrigin: 'OriginText-S2-L1',
        chordsOrigin: 'C    D   F     G-S2-L1',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 2,
        lPosition: 1
      },

      {
        id: 11,
        songId: 'A1',
        textPl: 'textPl-S2-L2',
        chords: 'A   D     G    H-S2-L2',
        textOrigin: 'OriginText-S2-L2',
        chordsOrigin: 'C    D   F     G-S2-L2',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 2,
        lPosition: 2
      },

      {
        id: 12,
        songId: 'A1',
        textPl: 'textPl-S1-L3',
        chords: 'A   D     G    H-S1-L3',
        textOrigin: 'OriginText-S1-L3',
        chordsOrigin: 'C    D   F     G-S1-L3',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 2,
        lPosition: 3
      },

      {
        id: 13,
        songId: 'A1',
        textPl: 'textPl-S3-L1',
        chords: 'A   D     G    H-S3-L1',
        textOrigin: 'OriginText-S3-L1',
        chordsOrigin: 'C    D   F     G-S3-L1',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 3,
        lPosition: 1
      },

      {
        id: 14,
        songId: 'A1',
        textPl: 'textPl-S3-L2',
        chords: 'A   D     G    H-S3-L2',
        textOrigin: 'OriginText-S3-L2',
        chordsOrigin: 'C    D   F     G-S3-L2',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 3,
        lPosition: 2
      },

      {
        id: 15,
        songId: 'A1',
        textPl: 'textPl-S3-L3',
        chords: 'A   D     G    H-S3-L3',
        textOrigin: 'OriginText-S3-L3',
        chordsOrigin: 'C    D   F     G-S3-L3',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 3,
        lPosition: 3
      },

      {
        id: 16,
        songId: 'A1',
        textPl: 'textPl-B1-L1',
        chords: 'A   D     G    H-B1-L1',
        textOrigin: 'OriginText-B1-L1',
        chordsOrigin: 'C    D   F     G-B1-L1',
        songPartName: SongPartsName.Bridge,
        songPartNumber: 1,
        lPosition: 1
      },

      {
        id: 17,
        songId: 'A1',
        textPl: 'textPl-B1-L2',
        chords: 'A   D     G    H-B1-L2',
        textOrigin: 'OriginText-B1-L2',
        chordsOrigin: 'C    D   F     G-B1-L2',
        songPartName: SongPartsName.Bridge,
        songPartNumber: 1,
        lPosition: 2
      },

      {
        id: 18,
        songId: 'B1',
        textPl: 'textPl-I1-L1',
        chords: 'A   D     G    H-I1-L1',
        textOrigin: 'OriginText-I1-L1',
        chordsOrigin: 'C    D   F     G-I1-L1',
        songPartName: SongPartsName.Intro,
        songPartNumber: 1,
        lPosition: 1
      },

      {
        id: 19,
        songId: 'B1',
        textPl: 'textPl-I1-L2',
        chords: 'A   D     G    H-I1-L2',
        textOrigin: 'OriginText-I1-L2',
        chordsOrigin: 'C    D   F     G-I1-L2',
        songPartName: SongPartsName.Intro,
        songPartNumber: 1,
        lPosition: 2
      },

      {
        id: 20,
        songId: 'B1',
        textPl: 'textPl-S1-L1',
        chords: 'A   D     G    H-S1-L1',
        textOrigin: 'OriginText-S1-L1',
        chordsOrigin: 'C    D   F     G-S1-L1',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 1,
        lPosition: 1
      },

      {
        id: 21,
        songId: 'B1',
        textPl: 'textPl-S1-L2',
        chords: 'A   D     G    H-S1-L2',
        textOrigin: 'OriginText-S1-L2',
        chordsOrigin: 'C    D   F     G-S1-L2',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 1,
        lPosition: 2
      },

      {
        id: 22,
        songId: 'B1',
        textPl: 'textPl-S1-L3',
        chords: 'A   D     G    H-S1-L3',
        textOrigin: 'OriginText-S1-L3',
        chordsOrigin: 'C    D   F     G-S1-L3',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 1,
        lPosition: 3
      },

      {
        id: 23,
        songId: 'B1',
        textPl: 'textPl-R1-L1',
        chords: 'A   D     G    H-R1-L1',
        textOrigin: 'OriginText-R1-L1',
        chordsOrigin: 'C    D   F     G-R1-L1',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        lPosition: 1
      },

      {
        id: 24,
        songId: 'B1',
        textPl: 'textPl-R1-L2',
        chords: 'A   D     G    H-R1-L2',
        textOrigin: 'OriginText-R1-L2',
        chordsOrigin: 'C    D   F     G-R1-L2',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        lPosition: 2
      },

      {
        id: 25,
        songId: 'B1',
        textPl: 'textPl-R1-L3',
        chords: 'A   D     G    H-R1-L3',
        textOrigin: 'OriginText-R1-L3',
        chordsOrigin: 'C    D   F     G-R1-L3',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        lPosition: 3
      },

      {
        id: 26,
        songId: 'B1',
        textPl: 'textPl-R1-L4',
        chords: 'A   D     G    H-R1-L4',
        textOrigin: 'OriginText-R1-L4',
        chordsOrigin: 'C    D   F     G-R1-L4',
        songPartName: SongPartsName.Refrain,
        songPartNumber: 1,
        lPosition: 4
      },

      {
        id: 27,
        songId: 'B1',
        textPl: 'textPl-S2-L1',
        chords: 'A   D     G    H-S2-L1',
        textOrigin: 'OriginText-S2-L1',
        chordsOrigin: 'C    D   F     G-S2-L1',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 2,
        lPosition: 1
      },

      {
        id: 28,
        songId: 'B1',
        textPl: 'textPl-S2-L2',
        chords: 'A   D     G    H-S2-L2',
        textOrigin: 'OriginText-S2-L2',
        chordsOrigin: 'C    D   F     G-S2-L2',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 2,
        lPosition: 2
      },

      {
        id: 29,
        songId: 'B1',
        textPl: 'textPl-S1-L3',
        chords: 'A   D     G    H-S1-L3',
        textOrigin: 'OriginText-S1-L3',
        chordsOrigin: 'C    D   F     G-S1-L3',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 2,
        lPosition: 3
      },

      {
        id: 30,
        songId: 'B1',
        textPl: 'textPl-S3-L1',
        chords: 'A   D     G    H-S3-L1',
        textOrigin: 'OriginText-S3-L1',
        chordsOrigin: 'C    D   F     G-S3-L1',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 3,
        lPosition: 1
      },

      {
        id: 31,
        songId: 'B1',
        textPl: 'textPl-S3-L2',
        chords: 'A   D     G    H-S3-L2',
        textOrigin: 'OriginText-S3-L2',
        chordsOrigin: 'C    D   F     G-S3-L2',
        songPartName: SongPartsName.Stanza,
        songPartNumber: 3,
        lPosition: 2
      },
    ];

    return {meetings, songs, lines};
  }

  genId(meetings: Meeting[]): number {
    return meetings.length > 0 ? Math.max(...meetings.map(meeting => meeting.id)) + 1 : 1;
  }
}
