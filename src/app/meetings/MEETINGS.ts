import { Meeting } from './meeting';
import { SONGS } from '../songs/SONGS';

export const MEETINGS: Meeting[] = [
    { id: 1, author: 'Janusz', meetingDate: new Date(), addingDate: new Date(), songsList: SONGS.slice(0, 3) },
    { id: 2, author: 'Grażyna', meetingDate: new Date(), addingDate: new Date(), songsList: SONGS.slice(3, 6) },
    { id: 3, author: 'Bolek', meetingDate: new Date(), addingDate: new Date(), songsList: SONGS.slice(7, 11) },
    { id: 4, author: 'Fred', meetingDate: new Date(), addingDate: new Date(), songsList: SONGS.slice(9, 13) },
];
