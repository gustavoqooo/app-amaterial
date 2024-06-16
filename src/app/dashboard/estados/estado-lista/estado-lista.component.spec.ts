import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoListaComponent } from './estado-lista.component';

describe('EstadoListaComponent', () => {
  let component: EstadoListaComponent;
  let fixture: ComponentFixture<EstadoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
