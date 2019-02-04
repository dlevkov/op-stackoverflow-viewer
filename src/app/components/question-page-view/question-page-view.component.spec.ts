import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPageViewComponent } from './question-page-view.component';

describe('QuestionPageViewComponent', () => {
  let component: QuestionPageViewComponent;
  let fixture: ComponentFixture<QuestionPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
