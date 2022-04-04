import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

interface Panel{
  image?:string,
  name?:string,
  isActive?:boolean
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }
  activeIndex:number = 0;
  backgrounds:Panel[] = [
    {
      image:
        'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      name: 'Explore The World',
    },
    {
      image:
        'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      name: 'Wild Forest',
    },
    {
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      name: 'Sunny Beach',
    },
    {
      image:
        'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      name: 'City on Winter',
    },
    {
      image:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      name: 'Mountains - Clouds',
    },
  ];
  ngOnInit() {
    this.backgrounds = this.backgrounds.map((x,i)=>{ 
      return {
        ...x,
        isActive:false
      }
    });
    this.backgrounds[this.activeIndex].isActive = true;
  }

  setActive(i){
   
    this.backgrounds[this.activeIndex].isActive = false;
    this.activeIndex = i;
    this.backgrounds[i].isActive = true;
  }

}
