import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { mergeMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }


  constructor(private fb: FormBuilder, private bookingService:BookingService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomid');
    this.bookingForm = this.fb.group({
      //roomId: new FormControl(''), //same as ['']
      roomId: new FormControl({ value: roomId, disabled: true }, {validators: [Validators.required]}), //same as ['']
      guestEmail: ['', 
        {
          updateOn: 'blur', 
          validators: [Validators.required, Validators.email]
        }],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['',        {
        updateOn: 'blur', 
        validators: [Validators.required, Validators.email]
      }],
      guestName: ['', [Validators.required, Validators.minLength(5), CustomValidator.ValidateName, CustomValidator.ValidateSpecialChar('*')]],

      address: this.fb.group({
        addressLine1: ['', {validators: [Validators.required]}],
        addressLine2: [''],
        city: ['', {validators: [Validators.required]}],
        state: ['', {validators: [Validators.required]}],
        country: [''],
        zipCode: [''],
      }),

      guests: this.fb.array([this.addGuestControl()]),
      tnc: new FormControl(false, {validators: [Validators.requiredTrue]}),
    }, {updateOn: 'blur', validators: [CustomValidator.validateDate] });

    this.getBookingData();

    this.bookingForm.valueChanges.subscribe((data) => {
      console.log(data); });

    // this.bookingForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    //   this.bookingService.bookRoom(data).subscribe((data)=>{});
    // });

    // this.bookingForm.valueChanges.pipe(
    //   mergeMap((data) => this.bookingService.bookRoom(data))
    // ).subscribe((data) => console.log(data));

  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());

    this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data)=> {console.log(data)} );

    this.bookingForm.reset({
      roomId: '2',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',

      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },

      guests: [],
      tnc: false,
    });

    this.getBookingData();
  }

  addGuest() {
    this.guests.push(this.addGuestControl());
  }

  addGuestControl() {
    return this.fb.group({ guestName: ['', {validators: [Validators.required]}], 
      age: new FormControl('') });
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if(this.bookingForm.get('passport')) {
          this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i:number) {
    this.guests.removeAt(i);
  }
  
  getBookingData() {
    this.bookingForm.patchValue({
      guestEmail: 'test@gmailcom',
      checkinDate: new Date('10-Feb-2020'),
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',

      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },

      guests: [],
      tnc: false,
    })
  }


}


// export class Booking {
//   roomId: string;
//   guestEmail: string;
//   checkinDate: Date;
//   checkoutDate: Date;
//   bookingStatus: string;
//   bookingAmount: number;
//   bookingDate: Date;
//   mobileNumber: string;
//   guestName: string;
//   guestAddress: string;
//   guestCity: string;
//   guestState: string;
//   guestCountry: string;
//   guestZipCode: string;
//   questCount: number;
//   guestList: Guest[];

// }