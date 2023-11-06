import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HompePageComponent } from './hompe-page.component';

describe('HompePageComponent', () => {
  let component: HompePageComponent;
  let fixture: ComponentFixture<HompePageComponent>;

  beforeEach(() => {
    // @ts-ignore
    TestBed.configureTestingModule({
      declarations: [HompePageComponent]
    });
    // @ts-ignore
    fixture = TestBed.createComponent(HompePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
