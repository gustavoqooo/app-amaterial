import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploAmaterialComponent } from './ejemplo-amaterial.component';

describe('EjemploAmaterialComponent', () => {
  let component: EjemploAmaterialComponent;
  let fixture: ComponentFixture<EjemploAmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploAmaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploAmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
