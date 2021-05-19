import { TestBed } from '@angular/core/testing';

import { InMemoryDataLinesService } from './in-memory-data-lines.service';

describe('InMemoryDataLinesService', () => {
  let service: InMemoryDataLinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataLinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
