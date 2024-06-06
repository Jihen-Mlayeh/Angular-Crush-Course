import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent {
  @Input()//i will receive this as a paramater from the parent component

  message:any={};
  @Input()
  index=-1;
  @Output()
  delete:EventEmitter<number>=new EventEmitter<number>
  onDelete():void{
    this.delete.emit(this.index);

  }

}
