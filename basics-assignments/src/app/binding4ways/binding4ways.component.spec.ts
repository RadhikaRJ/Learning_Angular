import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Binding4waysComponent } from './binding4ways.component';

describe('Binding4waysComponent', () => {
  let component: Binding4waysComponent;
  let fixture: ComponentFixture<Binding4waysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Binding4waysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Binding4waysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
