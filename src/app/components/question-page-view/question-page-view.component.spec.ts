import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPageViewComponent } from './question-page-view.component';
import { MatCardModule, MatDividerModule } from '@angular/material';
import { DataProviderService } from 'src/app/data-provider.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('QuestionPageViewComponent', () => {
  let component: QuestionPageViewComponent;
  let fixture: ComponentFixture<QuestionPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDividerModule],
      providers: [{ provide: DataProviderService, useValue: jest.fn() }],
      declarations: [QuestionPageViewComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPageViewComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
