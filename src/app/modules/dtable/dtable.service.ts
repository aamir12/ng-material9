import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Users } from "./users";

@Injectable()
export class DTableService{
    constructor(private http:HttpClient){}

    findUsers(
        filter = '', sortOrder = 'asc',sortBy='id',
        pageNumber = 0, pageSize = 3):  Observable<any> {

        return this.http.get('http://localhost/api/index.php', {
            params: new HttpParams()
                //.set('courseId', courseId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('sortBy', sortBy)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        });
    }

    
    newFindUsers(
        data):  Observable<any> {

        // let params    = new HttpParams();
        // if(keyword && keyword !==''){
        //     params.set('keyword', keyword);
        // }
        // params.set('sortby', sortby);
        // params.set('orderby', orderby);
        // params.set('pageno', pageno.toString());
        // params.set('limit', limit.toString());
        return this.http.get('http://localhost/api/index.php', data);
    }

}