import { AfterContentChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterContentChecked {

  
  hotelname: string = "Hotel Hilton";
  numberOfRooms: number = 10;
  hideRooms: boolean = false;
  selectedRoom!: RoomList;
  title = 'Room List';

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  priceFilter = new FormControl(0);
  

  roomList: RoomList[] = [];

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(@SkipSelf() private roomsService: RoomsService, private configService: ConfigService) {

    
  }


  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
    this.headerChildrenComponent.last.title = 'last';

  }


  ngOnInit(): void {
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log("completed")
    });


    this.stream.subscribe((data) => console.log(data));

      this.roomList = this.roomsService.getRooms();
  }


  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
      price: 500,
      photos: 'https://as1.ftcdn.net/v2/jpg/02/92/49/28/1000_F_292492856_mFuliS4e0lfL1fcdmnOD8CwriNvauStW.jpg',
      checkinTime: new Date('15-Nov-2021'),
      checkoutTime: new Date('16-Nov-2021'),
      rating: 4.2
    }

    //this.roomList.push(room);

    // this.roomsService.addRoom(room).subscribe((data) => {
    //   this.roomList = data;
    // })

    this.roomList = [...this.roomList, room]; //with push change detection strategy must be new object to refresh
  }



}

//ng g c rooms - g-generate, c - component
//angular.io docs -> commands
