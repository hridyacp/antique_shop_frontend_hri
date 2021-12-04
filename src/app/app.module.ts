import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatBadgeModule } from '@angular/material/badge';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SingleitemComponent } from './singleitem/singleitem.component';
import { HomeComponent } from './home/home.component';
import { ConfirmEqualValidatorDirective } from './signup/confirm-equal-validator.directive';
import { AntiqueService } from './antique.service';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { WishComponent } from './wish/wish.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AntiqueFilterPipe } from './home/antiqueitem-filter.pipe';
import { AddantiqueComponent } from './addantique/addantique.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    SingleitemComponent,
    HomeComponent,
    ConfirmEqualValidatorDirective,
    CartComponent,
    WishComponent,
    CheckoutComponent,
    AntiqueFilterPipe,
    AddantiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule
  ],
  providers: [AntiqueService,AuthService,{
    provide:HTTP_INTERCEPTORS,
  useClass:TokenInterceptorService,
multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
