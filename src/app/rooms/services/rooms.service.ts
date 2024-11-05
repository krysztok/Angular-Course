import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {



  roomList: RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
    price: 500,
    photos: 'https://as1.ftcdn.net/v2/jpg/02/92/49/28/1000_F_292492856_mFuliS4e0lfL1fcdmnOD8CwriNvauStW.jpg',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'),
    rating: 4.5
  },
  {
    roomNumber: 2,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
    price: 1000,
    photos: 'https://as1.ftcdn.net/v2/jpg/02/92/49/28/1000_F_292492856_mFuliS4e0lfL1fcdmnOD8CwriNvauStW.jpg',
    checkinTime: new Date('13-Nov-2021'),
    checkoutTime: new Date('15-Nov-2021'),
    rating: 3.449434
  },
  {
    roomNumber: 3,
    roomType: 'Private Suite',
    amenities: 'Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
    price: 15000,
    photos: 'https://as1.ftcdn.net/v2/jpg/02/92/49/28/1000_F_292492856_mFuliS4e0lfL1fcdmnOD8CwriNvauStW.jpg',
    checkinTime: new Date('15-Nov-2021'),
    checkoutTime: new Date('16-Nov-2021'),
    rating: 2.6
  }
  ];

  constructor() {
    console.log("service init");
  }

  getRooms() {
    return this.roomList;
  }

  addRoom(room: RoomList) {
    //return this.http.post<RoomList[]>('/api/rooms', room);
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos',
      { reportProggress: true });

      // return this.http.request(request);
  }

}
