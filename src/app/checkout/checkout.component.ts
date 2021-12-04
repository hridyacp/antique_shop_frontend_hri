import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AntiqueService } from '../antique.service';
import { CheckoutModel } from './checkout.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  newstuds = new CheckoutModel(null,null, null, null);
  constructor(private antiqueService:AntiqueService, private router:Router) { }
  newpay={
    totalpay:""
   }
   handler:any = null;
   tokenvalue:boolean=false;
  ngOnInit(): void {
    
    this.antiqueService.getCartPay()
    .subscribe((res)=>{
      this.newpay=JSON.parse(JSON.stringify(res))
      console.log(this.newpay)
    })
  }
payment(amount:any){
  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51JmASESJeDTHZ17rRTItK4Y1dsv9riiknmvKc3vhCUhbsEL2NT0XR0RGWa95oB4xkTOKlWYLDvbMkXXw2eKFtoiD00pFoLqPLh',
    locale: 'auto',
    token: function (token: any) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      console.log(token)
     // localStorage.removeItem('logemail');
    sessionStorage.setItem("tokanval",token)
    
      alert('Payment sucessfull. Please click on done for further shopping');      
    }
  });
  handler.open({
    name: 'Demo Site',
    description: '2 widgets',
    amount: (amount / 75)*100
  }); 
  
  this.tokenvalue=!this.tokenvalue
  
}
paid(){
  if(this.tokenvalue){
    this.newstuds.email=sessionStorage.getItem("email")
 this.newstuds.pstatus="paid"
 this.newstuds.payment=this.newpay.totalpay
    this.antiqueService.makePayment(this.newstuds)
    this.tokenvalue=!this.tokenvalue
    this.router.navigate(['/'])
  }
 else{
   alert("Please pay the fees")
 }
}

loadStripe() {
     
  if(!window.document.getElementById('stripe-script')) {
    var s = window.document.createElement("script");
    s.id = "stripe-script";
    s.type = "text/javascript";
    s.src = "https://checkout.stripe.com/checkout.js";
    s.onload = () => {
      this.handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51JmASESJeDTHZ17rRTItK4Y1dsv9riiknmvKc3vhCUhbsEL2NT0XR0RGWa95oB4xkTOKlWYLDvbMkXXw2eKFtoiD00pFoLqPLh',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token)
          alert('Payment Success!!');
        }
      });
    }
     
    window.document.body.appendChild(s);
  }
}
}
