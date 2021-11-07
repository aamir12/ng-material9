import { Component, OnInit, ViewChild } from "@angular/core";
import { CdkDragDrop, CdkDropList, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-sorting",
  templateUrl: "./sorting.component.html",
  styleUrls: ["./sorting.component.css"],
})
export class SortingComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  
  movies = [
    "Episode I - The Phantom Menace",
    "Episode II - Attack of the Clones",
    "Episode III - Revenge of the Sith",
    "Episode IV - A New Hope",
    "Episode V - The Empire Strikes Back",
    "Episode VI - Return of the Jedi",
    "Episode VII - The Force Awakens",
    "Episode VIII - The Last Jedi",
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
   // console.log(this.list.sorted);
  }
}
