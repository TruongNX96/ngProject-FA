import { NgModule, forwardRef, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat.component';
import { appRoutes } from '../modules/routing.module';
import { ChatService } from './chat.service';
import { AuthService } from '../auth/auth.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    appRoutes
  ],
  declarations: [
    ChatComponent
  ],
  providers: [ChatService],
})
export class ChatModule { }

