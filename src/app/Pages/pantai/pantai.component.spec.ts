import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantaiComponent } from './pantai.component';

describe('PantaiComponent', () => {
  let component: PantaiComponent;
  let fixture: ComponentFixture<PantaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
