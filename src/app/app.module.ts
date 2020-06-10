import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpInterceptorModule } from './services/header-interceptorptor.service';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { UnverifiedUserComponent } from './components/unverified-user/unverified-user.component';
import { ValidatedUserComponent } from './components/validated-user/validated-user.component';
import { ValidatingUserComponent } from './pages/validating-user/validating-user.component';
import { EmailSentComponent } from './pages/email-sent/email-sent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterUserComponent,
    UnverifiedUserComponent,
    ValidatedUserComponent,
    ValidatingUserComponent,
    EmailSentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
