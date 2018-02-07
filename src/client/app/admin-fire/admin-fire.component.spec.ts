import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFireComponent } from './admin-fire.component';

describe('AdminFireComponent', () => {
  let component: AdminFireComponent;
  let fixture: ComponentFixture<AdminFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
