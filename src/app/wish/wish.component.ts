import { Component, OnInit } from '@angular/core';
import { AntiqueService } from '../antique.service';
import { WishModel } from './Wish.model';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
  newWishItem!:WishModel[];
  emptywish:boolean=false;
  constructor(private antiqueService:AntiqueService) { }

  ngOnInit(): void {
    this.antiqueService.getWishItem()
    .subscribe((data)=>{
      this.newWishItem=JSON.parse(JSON.stringify(data))
      console.log(this.newWishItem)
      if(this.newWishItem.length==0){
        this.emptywish=!this.emptywish
              }
    })
  }
moveCart(cart){
  sessionStorage.setItem("cartIds",cart._id.toString());
  let cartIds= sessionStorage.getItem("cartIDs")
  this.antiqueService.movetoCart(cart)
  this.antiqueService.getWishItem()
  .subscribe((data)=>{
    this.newWishItem=JSON.parse(JSON.stringify(data))
    console.log(this.newWishItem)
  })
}
}
