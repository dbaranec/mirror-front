import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedayComponent } from './nameday.component';

describe('NamedayComponent', () => {
  let component: NamedayComponent;
  let fixture: ComponentFixture<NamedayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamedayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
