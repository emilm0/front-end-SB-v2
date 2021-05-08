import { Song } from '../songs/song';

export interface Meeting {
    id: number;
    author: string;
    meetingDate: Date;
    addingDate: Date;
    songsList: Song[];
    note?: string;
}
