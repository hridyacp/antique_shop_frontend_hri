import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddantiqueComponent } from './addantique.component';

describe('AddantiqueComponent', () => {
  let component: AddantiqueComponent;
  let fixture: ComponentFixture<AddantiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddantiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddantiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
