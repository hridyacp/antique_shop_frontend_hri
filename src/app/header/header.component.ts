import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'stream';
import { AntiqueService } from '../antique.service';
import { AuthService } from '../auth.service';
import { CartModel } from '../cart/Cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService, private router:Router, private antiqueService:AntiqueService) { }
  newpendingnotifItem={
    counter:''
  }
  newpendingwishnotifItem={
    counters:''
  }
  newCartItem!:CartModel[];
  ngOnInit(): void {
    setInterval(() => { this.antiqueService.getCartNumbs()
      .subscribe(
        (res)=>{this.newpendingnotifItem=JSON.parse(JSON.stringify(res));
    })},1000)
    
    setInterval(() => {this.antiqueService.getPendingWish()
.subscribe((data)=>{
  this.newpendingwishnotifItem=JSON.parse(JSON.stringify(data));
  console.log(this.newpendingwishnotifItem.counters)
})},1000)
  }
  logoutUser(){
    sessionStorage.clear();
    this.router.navigate(['/'])
  }
}
