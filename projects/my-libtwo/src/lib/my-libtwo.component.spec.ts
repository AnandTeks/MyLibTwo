import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibtwoComponent } from './my-libtwo.component';

describe('MyLibtwoComponent', () => {
  let component: MyLibtwoComponent;
  let fixture: ComponentFixture<MyLibtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLibtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
