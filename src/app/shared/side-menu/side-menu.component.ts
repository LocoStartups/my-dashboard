import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {


  public menuItems =  routes
        .map( route => route.children ?? [])
        .flat()
        .filter( x => x  && x.path )
        .filter( x => !x.path?.includes(':'))


}
