import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarrdvsPage } from './cancelarrdvs.page';

describe('CancelarrdvsPage', () => {
  let component: CancelarrdvsPage;
  let fixture: ComponentFixture<CancelarrdvsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelarrdvsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarrdvsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
