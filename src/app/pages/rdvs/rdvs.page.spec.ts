import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvsPage } from './rdvs.page';

describe('RdvsPage', () => {
  let component: RdvsPage;
  let fixture: ComponentFixture<RdvsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdvsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
