import { SongGroup } from './SongGroup';
import { SongType } from './SongType';

export interface Song {
    id: string;
    titlePl: string;
    titleOrigin: string;
    key: string;
    keyOrigin: string;
    author: string;
    translator: string;
    tempo: number;
    group: SongGroup;
    type: SongType;
    addTime: Date;
    copyright: string;
    basedOn: string;
    linkPl: string;
    linkOrigin: string;
    linkToDrive: string;
    linkToNotes: string;
    editTime: Date;
    editorName: string;
    editContent: string;
    isReadyToUse: boolean;
    isInUse: boolean;
    timesOfUse: number;
}
