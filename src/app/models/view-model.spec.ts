import { ViewModel } from './view-model';
import { DataModelItem } from './data-model';

describe('ViewModel', () => {
  it('should create an instance', () => {
    const expected = {
      title: '123',
      link: 'lnk',
      score: 0,
      view_count: 0,
    };
    expect(new ViewModel(expected as DataModelItem)).toBeTruthy();
  });
});
