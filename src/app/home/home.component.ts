import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AntiqueService } from '../antique.service';
import { AuthService } from '../auth.service';
import { AntiqueModel } from './Antique.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _auth:AuthService, private antiqueService:AntiqueService, private router:Router) { }
  newAntiqueItem!:AntiqueModel[];
  searchTerm: string;
  ngOnInit(): void {
    this.antiqueService.getItem()
    .subscribe((data)=>{
      this.newAntiqueItem=JSON.parse(JSON.stringify(data))
      console.log(this.newAntiqueItem)
    })
  }
getEach(newAntique){
  sessionStorage.setItem("antiqueId",newAntique._id.toString())
  this.router.navigate(['/singleitem'])
}
}
