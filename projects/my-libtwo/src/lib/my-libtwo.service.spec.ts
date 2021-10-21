import { TestBed } from '@angular/core/testing';

import { MyLibtwoService } from './my-libtwo.service';

describe('MyLibtwoService', () => {
  let service: MyLibtwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibtwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
