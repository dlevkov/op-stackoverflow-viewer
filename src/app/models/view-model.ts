import { DataModel, DataModelItem } from './data-model';

export class ViewModel {
  public title: string;
  public viewCount: number;
  public score: number;
  public link: string;

  constructor(public dmi: DataModelItem) {
    this.title = dmi.title;
    this.link = dmi.link;
    this.score = dmi.score;
    this.viewCount = dmi.view_count;
  }
}
