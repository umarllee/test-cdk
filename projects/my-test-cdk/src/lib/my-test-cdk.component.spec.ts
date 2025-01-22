import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestCdkComponent } from './my-test-cdk.component';

describe('MyTestCdkComponent', () => {
  let component: MyTestCdkComponent;
  let fixture: ComponentFixture<MyTestCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTestCdkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTestCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
