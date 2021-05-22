import { SongPartsName } from './SongPartsName';

export interface Line{

    id: number;
    songId: string;
    textPl?: string;
    chords?: string;
    textOriginal?: string;
    chordsOriginal?: string;
    songPart: SongPartsName;
    songPartNumber: number;
    linePosition: number;

}
