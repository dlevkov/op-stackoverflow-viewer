import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { DataModel } from './models/data-model';
import { flatMap, map, toArray, tap, catchError } from 'rxjs/operators';
import { ViewModel } from './models/view-model';
@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  private store: ViewModel[] = [];
  private items$ = new Subject<ViewModel[]>();
  private activeItem$ = new Subject<ViewModel>();
  constructor(private http: HttpClient) {}
  doSearch(text: string): void {
    this.getDataBySearchKey(text)
      .pipe(this.adaptDmToVm$)
      .subscribe(x => {
        this.store = x;
        this.activeItem$.next(null);
        this.items$.next(this.store);
      });
  }
  public get selectItems$(): Observable<ViewModel[]> {
    return this.items$.asObservable();
  }
  public get selectItem$(): Observable<ViewModel> {
    return this.activeItem$.asObservable();
  }
  public navigateToItemById(id: number) {
    this.activeItem$.next(this.store.find(x => x.id === id));
  }
  private getDataBySearchKey(key: string): Observable<DataModel> {
    return this.http.get<DataModel>(
      `https://api.stackexchange.com/2.2/tags/${key}/faq?page=1&pagesize=10&site=stackoverflow`
    );
  }
  private adaptDmToVm$(odm: Observable<DataModel>): Observable<ViewModel[]> {
    return odm.pipe(
      flatMap(x => x.items),
      map(x => new ViewModel(x)),
      toArray()
    );
  }
}
