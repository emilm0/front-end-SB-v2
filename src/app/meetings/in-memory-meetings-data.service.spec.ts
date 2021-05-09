import { TestBed } from '@angular/core/testing';

import { InMemoryMeetingsDataService } from './in-memory-meetings-data.service';

describe('InMemoryMeetingsDataService', () => {
  let service: InMemoryMeetingsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryMeetingsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
