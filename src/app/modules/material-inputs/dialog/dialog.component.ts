import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
    
  }

  openDialog(){
    //for conditional purpose
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.panelClass = 'my-dialog-class';
    // dialogConfig.data = {
    //   id: 1,
    //   title: 'Angular For Beginners',
    //   description: "Dummy description"
    // };
    const dialogRef = this.dialog.open(SimpleModalComponent,{
      width: '550px',
      disableClose: true,
      autoFocus: false,
      data :{
        id: 1,
        title: 'Angular For Beginners',
        description: "Dummy description"
      }
    });
    dialogRef.afterClosed().subscribe(
      value => {
        if(value){
          console.log("Dialog output:", value)
        }
      }
  );  
  }

}
