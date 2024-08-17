import { Component } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private appService : AppService
  ){}

  toggleSideBar(){
    this.appService.sideBarStatus.set(!this.appService.sideBarStatus());
  }
}
