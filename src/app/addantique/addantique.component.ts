import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AntiqueService } from '../antique.service';
import { AntiqueModel } from '../home/Antique.model';

@Component({
  selector: 'app-addantique',
  templateUrl: './addantique.component.html',
  styleUrls: ['./addantique.component.css']
})
export class AddantiqueComponent implements OnInit {
  title:String = "Add New Item"
  images:any
  filename:String
  constructor(private antiqueService:AntiqueService, private router:Router) { }
  newAntiqueItem= new AntiqueModel(null,null,null,null,null,null);
  ngOnInit(): void {
  }
addNewitem(){
  this.antiqueService.addItem(this.newAntiqueItem);
  alert("Book added sucessfully");
  this.router.navigate(['/']);
}
}
