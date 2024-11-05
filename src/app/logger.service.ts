import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { AppConfig } from './AppConfig/appconfig.interface';

@Injectable()
export class LoggerService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) { }

  log(msg: string){
    console.log(msg);
  }
}
