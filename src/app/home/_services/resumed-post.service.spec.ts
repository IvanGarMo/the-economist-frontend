import { TestBed } from '@angular/core/testing';

import { ResumedPostService } from './resumed-post.service';

describe('ResumedPostService', () => {
  let service: ResumedPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumedPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
