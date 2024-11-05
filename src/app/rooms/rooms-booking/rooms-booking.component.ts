import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css'
})
export class RoomsBookingComponent implements OnInit{

  id:number = 0;

  id$ !: Observable<any>;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['roomid'];
    this.id$ = this.router.paramMap.pipe(map((params) => params.get('roomid')));

    // this.router.params.subscribe((params) => {this.id = params['roomid']});
  }

}
