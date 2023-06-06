import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlertaComponent } from './edit-alerta.component';

describe('EditAlertaComponent', () => {
  let component: EditAlertaComponent;
  let fixture: ComponentFixture<EditAlertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAlertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
