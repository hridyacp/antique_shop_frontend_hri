import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { AntiqueService } from '../antique.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-singleitem',
  templateUrl: './singleitem.component.html',
  styleUrls: ['./singleitem.component.css']
})
export class SingleitemComponent implements OnInit {

  constructor(public _auth:AuthService, private antiqueService:AntiqueService) { }
  newAntiqueItem={
    name:"",
    type:"",
    description:"",
    prodID:"",
    price:"",
    image:''
  }
  newpendingnotifItem={
    pending:''
  }
  newpendingwishnotifItem={
    pendings:''
  }
  ngOnInit(): void {
    let antiqueId= sessionStorage.getItem("antiqueId")
    this.antiqueService.getEachItem(antiqueId)
    .subscribe((data)=>{
      this.newAntiqueItem=JSON.parse(JSON.stringify(data))
    })
  }
addCart(newAntiques){
  newAntiques.email=sessionStorage.getItem("email")
  this.antiqueService.addCart(newAntiques)
  console.log(newAntiques)
}
addWish(newAntiquewish){
  newAntiquewish.email=sessionStorage.getItem("email")
  this.antiqueService.addWish(newAntiquewish)
 
}
}
