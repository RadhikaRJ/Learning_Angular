import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourDirectivesComponent } from './four-directives.component';

describe('FourDirectivesComponent', () => {
  let component: FourDirectivesComponent;
  let fixture: ComponentFixture<FourDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
