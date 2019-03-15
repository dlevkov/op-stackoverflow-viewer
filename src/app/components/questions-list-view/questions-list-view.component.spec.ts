import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsListViewComponent } from './questions-list-view.component';
import { MatDividerModule } from '@angular/material';
import { DataProviderService } from 'src/app/data-provider.service';

describe('QuestionsListViewComponent', () => {
  let component: QuestionsListViewComponent;
  let fixture: ComponentFixture<QuestionsListViewComponent>;
  const mockService = { doSearch: jest.fn() };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDividerModule],
      declarations: [QuestionsListViewComponent],
      providers: [{ provide: DataProviderService, useValue: mockService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
