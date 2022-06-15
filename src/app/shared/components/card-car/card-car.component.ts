import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICarModel } from 'src/app/core/models/cars.model';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.scss']
})
export class CardCarComponent implements OnInit {

  @Input() item: ICarModel = {};
  @Output() selectItemEvent = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }


  onClickView() {
    this.selectItemEvent.emit(this.item.id);
  }

}
