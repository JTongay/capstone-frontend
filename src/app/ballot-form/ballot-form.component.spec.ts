/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BallotFormComponent } from './ballot-form.component';

describe('BallotFormComponent', () => {
  let component: BallotFormComponent;
  let fixture: ComponentFixture<BallotFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallotFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
