import { AfterContentInit, Component, ContentChild, Host, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  providers: [RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit{
  
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = "Rick";
  }

  constructor(@Host() private roomsSerivce: RoomsService){

  }

}
