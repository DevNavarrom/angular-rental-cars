import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  itemView: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.itemView = this.itemView === 3 ? 1 : this.itemView + 1;
  }

  back() {
    this.itemView = this.itemView === 1 ? 3 : this.itemView - 1;
  }

}
