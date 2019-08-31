import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinsComponent } from './sins.component';

describe('SinsComponent', () => {
  let component: SinsComponent;
  let fixture: ComponentFixture<SinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
