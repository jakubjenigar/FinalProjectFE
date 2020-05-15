import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroQuizComponent } from './intro-quiz.component';

describe('IntroQuizComponent', () => {
  let component: IntroQuizComponent;
  let fixture: ComponentFixture<IntroQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
