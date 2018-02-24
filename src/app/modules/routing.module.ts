import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from '../auth/auth.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { ChatComponent } from '../chat/chat.component';
import { CanActivateService } from '../auth/guard/canActivate.service';
import { BookComponent } from '../book/book.component';
import { BookselfComponent } from '../book/bookself/bookself.component';
import { SearchComponent } from '../book/search/search.component';
import { CanDeActivateService } from '../auth/guard/canDeActivate.service';
import { BodyComponent } from '../body/body.component';



const routing: Routes = [
    {
        path: '', component: BodyComponent
    },
    {
        path: 'auth', component: AuthComponent, children: [
            { path: 'signup', component: SignUpComponent },
            { path: '', component: SignInComponent }
        ]
    },
    {
        path: 'chat', component: ChatComponent, canActivate: [CanActivateService],
        canDeactivate: [CanDeActivateService]
    },
    {
        path: 'book', component: BookComponent, children: [
            { path: 'bookself', component: BookselfComponent, canActivate: [CanActivateService] },
            { path: 'search', component: SearchComponent, canActivate: [CanActivateService] }
        ]
    }
];

export const appRoutes = RouterModule.forRoot(routing);
