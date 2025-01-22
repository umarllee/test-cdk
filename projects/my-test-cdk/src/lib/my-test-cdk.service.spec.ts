import { TestBed } from '@angular/core/testing';

import { MyTestCdkService } from './my-test-cdk.service';

describe('MyTestCdkService', () => {
  let service: MyTestCdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTestCdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
