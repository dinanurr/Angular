import { TestBed } from '@angular/core/testing';

import { DestinasiService } from './destinasi.service';

describe('DestinasiService', () => {
  let service: DestinasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
