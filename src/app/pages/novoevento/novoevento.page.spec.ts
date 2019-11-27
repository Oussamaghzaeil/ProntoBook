import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoeventoPage } from './novoevento.page';

describe('NovoeventoPage', () => {
  let component: NovoeventoPage;
  let fixture: ComponentFixture<NovoeventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoeventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoeventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
