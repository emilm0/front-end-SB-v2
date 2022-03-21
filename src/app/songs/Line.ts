import { SongPartsName } from './SongPartsName';

export interface Line{

    id: number;
    songId: string;
    textPl: string;
    chords: string;
    textOrigin: string;
    chordsOrigin: string;
    songPart: SongPartsName;
    songPartNumber: number;
    linePosition: number;

}
