import { TestBed } from '@angular/core/testing';

import { InMemoryDataSongsService } from './in-memory-data-songs.service';

describe('InMemoryDataSongsService', () => {
  let service: InMemoryDataSongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataSongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
