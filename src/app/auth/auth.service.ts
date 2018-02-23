import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    account = null;
    router: any;
    constructor(private route: Router) {

    }

    // Sign Up with email and password
    signup(fullName, email, password) {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Success!', value);
                this.account = firebase.auth().currentUser;
            })
            .catch(err => {
                // tslint:disable-next-line:no-unused-expression
                alert(err);
            });
    }

    // Sign In by email and password
    signin(email, password) {
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Nice, it worked!');
                this.account = firebase.auth().currentUser;
            })
            .catch(err => {
                alert(err);
            });
    }

    logout() {
        firebase.auth().signOut().then(value => {
            this.account = null;
        }).catch((errors) => {
            console.log(errors);
        });
    }
}
