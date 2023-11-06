/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoooterComponent } from './foooter.component';

describe('FoooterComponent', () => {
  let component: FoooterComponent;
  let fixture: ComponentFixture<FoooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
