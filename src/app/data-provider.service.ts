import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel, DataModelItem } from './models/data-model';
import { ViewModel } from './models/view-model';
import { map, flatMap, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  constructor(private http: HttpClient) {}

  public getDataBySearchKey(key: string): Observable<DataModel> {
    return this.http.get<DataModel>(key);
  }
  adaptDmToVm(odm: Observable<DataModel>): Observable<any> {
    return odm.pipe(
      // map((x: DataModel) => x.items),
      flatMap(x => x.items),
      tap(x => console.log(x))
    );
  }
}
