import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NgMaterialModule } from '../modules/ngMaterial.module';
import { appRoutes } from '../modules/routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    appRoutes
  ],
  declarations: [
    SignUpComponent,
    SignInComponent,
    AuthComponent
  ],
  providers: []
})
export class AuthModule { }
