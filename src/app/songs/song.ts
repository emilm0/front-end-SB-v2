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
}

// export class Song {

//     id: string;
//     titlePl: string;
//     titleOrigin: string;
//     key: string;
//     keyOrigin: string;
//     author: string;
//     translator: string;
//     tempo: number;
//     group: SongGroup;
//     type: SongType;
//     addTime: Date;
//     copyright: string;
//     basedOn: string;
//     linkPl: string;
//     linkOrigin: string;
//     linkToDrive: string;
//     linkToNotes: string;
//     editTime: Date;
//     editorName: string;
//     editContent: string;
//     isReadyToUse: boolean;
//     isInUse = true;

//     constructor(title: string, author: string, key: string, group: SongGroup, type: SongType, copyright: string) {
//         this.titlePl = title;
//         this.author = author;
//         this.key = key;
//         this.group = group;
//         this.type = type;
//         this.copyright = copyright;
//         this.addTime = new Date();
//         // this.id = this.setId();
//     }

//     // //  the id consist of the first title letter and number
//     // setId(): string {
//     //     return this.titlePl.substring(0, 1) + this.setId().toString();
//     // }

//     // setIdNumber(): number {
//     //     // ask database for number of songs on the same first character in title
//     //     return Math.random() * 100;
//     // }

//     changeUsedValue(): boolean {
//         return this.isInUse = !this.isInUse;
//     }
// }
