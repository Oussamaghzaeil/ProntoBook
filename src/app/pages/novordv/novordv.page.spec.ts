import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovordvPage } from './novordv.page';

describe('NovordvPage', () => {
  let component: NovordvPage;
  let fixture: ComponentFixture<NovordvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovordvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovordvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
