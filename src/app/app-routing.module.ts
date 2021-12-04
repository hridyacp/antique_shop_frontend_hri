import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddantiqueComponent } from './addantique/addantique.component';
import { AdroleGuard } from './adrole.guard';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoleGuard } from './role.guard';
import { SignupComponent } from './signup/signup.component';
import { SingleitemComponent } from './singleitem/singleitem.component';
import { WishComponent } from './wish/wish.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'singleitem',component:SingleitemComponent,canActivate:[AuthGuard]},
  {path:'cart',component:CartComponent, canActivate:[AuthGuard,RoleGuard]},
  {path:'wish',component:WishComponent, canActivate:[AuthGuard,RoleGuard]},
  {path:'checkout',component:CheckoutComponent, canActivate:[AuthGuard,RoleGuard]},
  {path:'addantique',component:AddantiqueComponent, canActivate:[AuthGuard,AdroleGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
