import { TestBed } from '@angular/core/testing';

import { NamedayService } from './nameday.service';

describe('NamedayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NamedayService = TestBed.get(NamedayService);
    expect(service).toBeTruthy();
  });
});
