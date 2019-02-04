import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/data-provider.service';
import { Observable } from 'rxjs';
import { ViewModel } from 'src/app/models/view-model';

@Component({
  selector: 'app-questions-list-view',
  templateUrl: './questions-list-view.component.html',
  styleUrls: ['./questions-list-view.component.scss'],
})
export class QuestionsListViewComponent implements OnInit {
  public items$: Observable<ViewModel[]>;

  constructor(private dpService: DataProviderService) {}

  ngOnInit() {
    this.items$ = this.dpService.selectItems$;
  }
  public selectItemById(id: number) {
    this.dpService.navigateToItemById(id);
  }
}
