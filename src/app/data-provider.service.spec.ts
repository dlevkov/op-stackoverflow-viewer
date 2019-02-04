import { TestBed } from '@angular/core/testing';

import { DataProviderService } from './data-provider.service';
import { HttpClient } from '@angular/common/http';

const fakeResponse = {
  items: [
    {
      tags: ['php', 'tags', 'php-shorttags'],
      owner: {
        reputation: 16829,
        user_id: 213689,
        user_type: 'registered',
        accept_rate: 87,
        profile_image:
          'https://www.gravatar.com/avatar/65f0120102850ccf148ab0de3287ebb1?s=128&d=identicon&r=PG',
        display_name: 'seedg',
        link: 'https://stackoverflow.com/users/213689/seedg',
      },
      is_answered: true,
      view_count: 476969,
      protected_date: 1408897359,
      accepted_answer_id: 2185331,
      answer_count: 18,
      score: 284,
      last_activity_date: 1531875383,
      creation_date: 1265125450,
      last_edit_date: 1368373305,
      question_id: 2185320,
      link:
        'https://stackoverflow.com/questions/2185320/how-to-enable-php-short-tags',
      title: 'How to enable PHP short tags?',
    },
    {
      tags: ['jquery', 'text', 'tags'],
      owner: {
        reputation: 9624,
        user_id: 209113,
        user_type: 'registered',
        accept_rate: 65,
        profile_image: 'https://i.stack.imgur.com/R8ORs.jpg?s=128&g=1',
        display_name: 'MegaMatt',
        link: 'https://stackoverflow.com/users/209113/megamatt',
      },
      is_answered: true,
      view_count: 138923,
      accepted_answer_id: 8851526,
      answer_count: 23,
      score: 327,
      last_activity_date: 1547693789,
      creation_date: 1281373643,
      last_edit_date: 1507918844,
      question_id: 3442394,
      link:
        'https://stackoverflow.com/questions/3442394/using-text-to-retrieve-only-text-not-nested-in-child-tags',
      title: 'Using .text() to retrieve only text not nested in child tags',
    },
  ],
};
describe('DataProviderService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: { get: () => {} } }],
    })
  );

  it('should be created', () => {
    const service: DataProviderService = TestBed.get(DataProviderService);
    expect(service).toBeTruthy();
  });
  it('should parse raw data to DM on getDataBySearchKey', () => {
    // Arrange
    const service: DataProviderService = TestBed.get(DataProviderService);
    const fake: HttpClient = TestBed.get(HttpClient);
    jest.spyOn(fake, 'get').mockReturnValue(fakeResponse);
    // Act
    const sut = service.getDataBySearchKey('any key');
    // Assert
    expect(sut).toMatchSnapshot();
  });
});
