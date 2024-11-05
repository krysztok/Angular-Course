import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy{

  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  @Input() price: number | null = 0;

  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnInit(): void {

  }

  constructor(){

  }
  
  ngOnDestroy(): void {
    console.log("on destroy");
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

}
