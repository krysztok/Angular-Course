import { AfterContentInit, Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  
  empName: string = 'John';
  
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private roomService: RoomsService) {

  }

}
