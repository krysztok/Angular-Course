import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template: `<h1>hello  </h1> AAAa`,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'hotelinventoryapp';
  //role = 'Admin'


  @ViewChild('name', { static: true }) name!: ElementRef


  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: any,
    private configService: ConfigService,
    private route: Router
  ) {

  }

  ngOnInit(): void {
    // this.route.events.subscribe((event) => {console.log(event)});

    this.route.events.pipe(
      filter((event) => event instanceof NavigationStart))
      .subscribe((event) => { console.log("Navigation Started") });

    this.route.events.pipe(
      filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => { console.log("Navigation Completed") });


    this.loggerService?.log('LOG');
    this.name.nativeElement.innerText = "Hilton Hotel";

    this.localStorage.setItem('name', 'Hilton Hotel');
  }


  // @ViewChild('user', {read: ViewContainerRef} ) vcr!: ViewContainerRef;


  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }

}


//ng new hotelinventoryapp --no-standalone   