import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMaterialModule } from './modules/ngMaterial.module';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { appRoutes } from './modules/routing.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { ChatModule } from './chat/chat.module';
import { CanActivateService } from './auth/guard/canActivate.service';
import { BookModule } from './book/book.module';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [

    BrowserModule,
    AuthModule,
    RouterModule,
    appRoutes,
    ChatModule,
    BookModule
  ],
  providers: [AuthService, CanActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
