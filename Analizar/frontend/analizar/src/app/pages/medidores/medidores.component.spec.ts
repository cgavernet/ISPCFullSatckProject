import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidoresComponent } from './medidores.component';

describe('MedidoresComponent', () => {
  let component: MedidoresComponent;
  let fixture: ComponentFixture<MedidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedidoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
