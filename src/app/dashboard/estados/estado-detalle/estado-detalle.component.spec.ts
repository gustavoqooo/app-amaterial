import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoDetalleComponent } from './estado-detalle.component';

describe('EstadoDetalleComponent', () => {
  let component: EstadoDetalleComponent;
  let fixture: ComponentFixture<EstadoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
