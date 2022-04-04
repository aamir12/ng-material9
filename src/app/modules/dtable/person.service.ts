import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PersonService {

  constructor(private http:HttpClient) {}

    findLessons(
         filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<any> {

        return this.http.get('/api/lessons', {
            params: new HttpParams()
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res =>  res["payload"])
        );
    }
}
