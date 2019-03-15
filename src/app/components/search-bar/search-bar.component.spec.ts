import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { DataProviderService } from 'src/app/data-provider.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  const mockService = { doSearch: jest.fn() };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
      ],

      providers: [
        FormBuilder,
        { provide: DataProviderService, useValue: mockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call DI function with given "Hello" and call reset', () => {
    const spy = jest.spyOn(mockService, 'doSearch');

    component.submitHandler('Hello');

    expect(spy).toBeCalledWith('Hello');
  });
});
