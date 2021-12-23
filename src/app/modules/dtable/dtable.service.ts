import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Users } from "./users";

@Injectable()
export class DTableService{
    constructor(private http:HttpClient){}

    findUsers(
        filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<any> {

        return this.http.get('http://localhost/api/index.php', {
            params: new HttpParams()
                //.set('courseId', courseId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        });
    }

}