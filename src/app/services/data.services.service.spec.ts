import { TestBed, inject } from '@angular/core/testing';

import { Data.ServicesService } from './data.services.service';

describe('Data.ServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Data.ServicesService]
    });
  });

  it('should be created', inject([Data.ServicesService], (service: Data.ServicesService) => {
    expect(service).toBeTruthy();
  }));
});
