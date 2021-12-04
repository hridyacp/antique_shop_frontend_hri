import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AntiqueService {
 // server_address:String = 'http://localhost:5200';
  server_address:String = '/api';
  constructor(private http:HttpClient) { }
  signup(item:any){
    return this.http.post(`${this.server_address}/signupnew`,{'signup':item})
    }
    getItem(){
      return this.http.get(`${this.server_address}/antique`);
    }
    getEachItem(id:any){
      return this.http.get(`${this.server_address}/eachantique/`+id);
    }
    addCart(item:any){
      return this.http.post(`${this.server_address}/addCartdata`,{'cart':item})
    .subscribe((data)=>console.log(data))
    }
    addWish(item:any){
      return this.http.post(`${this.server_address}/addWishdata`,{'wish':item})
      .subscribe((data)=>console.log(data))
    }
    getPending(){
      let id=sessionStorage.getItem("email")
      return this.http.get(`${this.server_address}/cartitemnumber/`+id);
    }
    getPendingWish(){
      let id=sessionStorage.getItem("email")
      return this.http.get(`${this.server_address}/wishitemnumber/`+id);
    }
    getCartItem(){
      let id=sessionStorage.getItem("email")
      return this.http.get(`${this.server_address}/cart/`+id);
    }
    getCartNumbs(){
      let id=sessionStorage.getItem("email")
      return this.http.get(`${this.server_address}/cartnumb/`+id);
    }
    getCartPay(){
      let id=sessionStorage.getItem("email")
      return this.http.get(`${this.server_address}/cartvalue/`+id);
    }
    getWishItem(){
      let id=sessionStorage.getItem("email")
      return this.http.get(`${this.server_address}/wish/`+id);
    }
    movetoCart(item){
      return this.http.post(`${this.server_address}/wishtocart`,{'wish':item})
      .subscribe((data)=>console.log(data))
    }
    cartDel(item){
      return this.http.post(`${this.server_address}/removecart`,{'wish':item})
    }
    makePayment(item){
      return this.http.post(`${this.server_address}/makepayment`,{'checkout':item})
      .subscribe((data)=>console.log(data))
    }
    addItem(item){
      return this.http.post(`${this.server_address}/additem`,{'antq':item})
      .subscribe((data)=>console.log(data))
    }
}
