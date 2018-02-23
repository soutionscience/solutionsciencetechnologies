import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualContactDialogComponent } from './actual-contact-dialog.component';

describe('ActualContactDialogComponent', () => {
  let component: ActualContactDialogComponent;
  let fixture: ComponentFixture<ActualContactDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualContactDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
