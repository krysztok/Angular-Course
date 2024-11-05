import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.css'
})
export class RoomsAddComponent {

  room: RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0
  }

  successMessage: string = '';

  constructor(private roomsService: RoomsService) {

  }

  AddRoom(roomsForm: NgForm) {
    
    this.roomsService.addRoom(this.room);
    this.successMessage = "success";
    console.log(this.successMessage)
    roomsForm.resetForm({
      roomType: '',
      amenities: '',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      photos: '',
      price: 0,
      rating: 0
    });
  }

}
