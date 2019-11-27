import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultrdvPage } from './consultrdv.page';

describe('ConsultrdvPage', () => {
  let component: ConsultrdvPage;
  let fixture: ComponentFixture<ConsultrdvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultrdvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultrdvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
