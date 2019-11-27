import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaocumpridasrdvsPage } from './naocumpridasrdvs.page';

describe('NaocumpridasrdvsPage', () => {
  let component: NaocumpridasrdvsPage;
  let fixture: ComponentFixture<NaocumpridasrdvsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaocumpridasrdvsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaocumpridasrdvsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
