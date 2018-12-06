import { TestBed, inject } from '@angular/core/testing';

import { QouteService } from './qoute.service';

describe('QouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QouteService]
    });
  });

  it('should be created', inject([QouteService], (service: QouteService) => {
    expect(service).toBeTruthy();
  }));
});
