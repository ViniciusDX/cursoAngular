import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './TitleComponent';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleComponent],
    });
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
