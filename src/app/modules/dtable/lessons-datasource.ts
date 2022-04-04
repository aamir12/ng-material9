import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { DTableService } from "./dtable.service";

export class LessonsDataSource implements DataSource<any> {

  private lessonsSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private coursesService: DTableService) {}

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
      return this.lessonsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
      this.lessonsSubject.complete();
      this.loadingSubject.complete();
  }

  loadLessons(courseId: number, filter = '',
              sortDirection = 'asc',sortBy, pageIndex = 0, pageSize = 3) {
      this.loadingSubject.next(true);
      this.coursesService.findUsers( filter, sortDirection,
        sortBy,pageIndex, pageSize).pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(lessons => this.lessonsSubject.next(lessons));
  }    
}