
import { Injectable, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {
    getMsgEvent = new EventEmitter();
    listMsg = [];
    status;
    uid;

    constructor() {

    }

    // Send msg on firebase and save follow url /message
    onSend(msg: object) {
        firebase.database().ref('message/').push(msg);
    }

    // Get msg from firebase
    getMsg() {
        firebase.database().ref('message/').on('value', (msg) => {
            if (msg.val() != null) {
                // msg is Object, converse to Array
                this.listMsg = Object.values(msg.val());
            }
            this.getMsgEvent.emit();
        });
    }

    // Send status and uid of User on firebase and save follow url /isTyping
    isTyping(status, uid) {
        firebase.database().ref('isTyping/').set({
            status: status,
            uid: uid
        });
    }
    // Get status typing to check
    getTyping() {
        firebase.database().ref('isTyping/').on('value', (status) => {
            this.status = status.val().status;
            this.uid = status.val().uid;
            this.getMsgEvent.emit();
        });
    }
}
