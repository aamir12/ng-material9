import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort,Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DTableService } from './dtable.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-dtable',
  templateUrl: './dtable.component.html',
  styleUrls: ['./dtable.component.css']
})
export class DTableComponent implements AfterViewInit,OnInit {
  //displayedColumns: string[] = ['id', 'name', 'progress', 'fruit']; //step1
  displayedColumns = ["seqNo", "description", "duration"];
  displayedColumns1 = ["id", "firstname", "lastname","email","reg_date"];
  //dataSource: MatTableDataSource<UserData>; //step2

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('searchInp',{static:true}) searchInp:ElementRef;
  search = new FormControl();
  offset = 0;
  limit = 10;
  currentPage = 1;
  itemCount: any;
  filterVal: any;
  sortBy: string = 'id';
  sortDirection: string = 'asc';
  public dataSource: MatTableDataSource<any>;
  sortedData: any;
  isLoading = false;

  assignPageSize : any = 0;
  dataCount:any = 0;
  constructor(private dtableService:DTableService) { 
    this.dataSource = new MatTableDataSource();
    this.sortedData = this.dataSource.data.slice();
  }

  ngOnInit(){
    // this.search.valueChanges.subscribe(val=>{
    //   this.dataSource.filter = val.trim().toLowerCase();
    //   if (this.dataSource.paginator) {
    //     this.dataSource.paginator.firstPage();
    //   }
    // });
    this.fetchData();
  }

  fetchData(val?){
    this.isLoading = true;
    const formData: FormData = new FormData();
    //formData.append('dataApiName', 'ItemFetchBasedOnrequestTypeCount');
    if (val) {
      formData.append('data', JSON.stringify({
        'keyword': val,
        'limit': 2,
        'pageno': 0
      }));
    } else {
      formData.append('data', JSON.stringify({
        
        'limit': 2,
        'pageno': 0
      }));
    }
    this.dataSource.data = [];
    const search = this.searchInp ? this.searchInp.nativeElement.value : '';
    this.dtableService.newFindUsers(formData).subscribe(res=>{
      //console.log(res);
      if(res.rows){
        this.dataSource.data = res.rows;
        this.dataCount = res.count;
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; //step4
    this.dataSource.sort = this.sort; //step5
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  onRowClicked(row){
    console.log(row);
  }

  onRowClicked1(row){
    console.log(row);
  }


  sortData(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!this.sort.active || !this.sort.start) {
      //this.dataSource.data = data;
      return;
    }



    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'name':
        //this.dataSource.data = this.esdCoreService.sortListByKey(data, 'approvalFlowDesc', isAsc);
        break;
      case 'id':
        //this.dataSource.data = this.esdCoreService.sortListByNumberKey(data, 'approvalFlowId', isAsc);
        break;
      case 'requestTypeName':
        //this.dataSource.data = this.esdCoreService.sortListByKey(data, 'requestTypeName', isAsc);
        break;
      case 'type':
        //this.dataSource.data = this.esdCoreService.sortListByKey(data, 'approvalTypeName', isAsc);
        break;
    }
  }

  onPageChange(page) {
    console.log(page)
    this.offset = page.pageIndex * this.paginator.pageSize;
    this.limit = page.pageSize;
    this.assignPageSize = page.pageSize;
    this.currentPage = page.pageIndex;
    this.fetchData()
  }

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
