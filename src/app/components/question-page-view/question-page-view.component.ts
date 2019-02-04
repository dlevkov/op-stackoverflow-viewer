import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/data-provider.service';
import { Observable } from 'rxjs';
import { ViewModel } from 'src/app/models/view-model';

@Component({
  selector: 'app-question-page-view',
  templateUrl: './question-page-view.component.html',
  styleUrls: ['./question-page-view.component.scss'],
})
export class QuestionPageViewComponent implements OnInit {
  public selectedItem$: Observable<ViewModel>;
  constructor(private dpService: DataProviderService) {}

  ngOnInit() {
    this.selectedItem$ = this.dpService.selectItem$;
  }
}
