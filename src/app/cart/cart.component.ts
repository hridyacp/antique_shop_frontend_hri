import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AntiqueService } from '../antique.service';
import { CartModel } from './Cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  newCartItem!:CartModel[];
  emptycart:boolean=false;
newpay={
 totalpay:""
}
  constructor(private antiqueService:AntiqueService, private router:Router) { }

  ngOnInit(): void {
    this.antiqueService.getCartItem()
    .subscribe((data)=>{
      this.newCartItem=JSON.parse(JSON.stringify(data))
      console.log(this.newCartItem.length)
      if(this.newCartItem.length==0){
this.emptycart=!this.emptycart
      }
    })
    this.antiqueService.getCartPay()
    .subscribe((res)=>{
      this.newpay=JSON.parse(JSON.stringify(res))
      console.log(this.newpay)
    })
  }
checkOut(){
  this.router.navigate(['checkout'])
}
deleteCart(cartdel){
  sessionStorage.setItem("cartIds",cartdel._id.toString());
  let cartIds= sessionStorage.getItem("cartIDs")
  this.antiqueService.cartDel(cartdel)
  .subscribe((data) => {
    console.log(data);
    alert("1 Item deleted")
  })
  this.antiqueService.getCartItem()
    .subscribe((data)=>{
      this.newCartItem=JSON.parse(JSON.stringify(data))
      console.log(this.newCartItem)
    })
    this.antiqueService.getCartPay()
    .subscribe((res)=>{
      this.newpay=JSON.parse(JSON.stringify(res))
      console.log(this.newpay)
    })
   
}
}
