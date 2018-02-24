import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ChatService } from './chat.service';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scroller') private feedContainer: ElementRef;
  time;
  chatForm: FormGroup;
  listMsg = this.chatService.listMsg;
  status;
  uid;

  // textarea FormControl
  get textarea() { return this.chatForm.get('textarea'); }
  constructor(
    private fb: FormBuilder,
    private chatService: ChatService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    // Creat Reactive Form
    this.chatForm = this.fb.group({
      textarea: new FormControl(null),
    });

    // Get Message when initialization component
    this.chatService.getMsg();
    this.chatService.getMsgEvent.subscribe(() => {
      this.listMsg = this.chatService.listMsg;
    });

    // If textarea value is change, enforcement method isTying() in ChatService
    let timeout;
    this.textarea.valueChanges.subscribe(() => {
      this.chatService.isTyping('true', this.authService.account.uid);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.chatService.isTyping('false', this.authService.account.uid);
      }, 1000);
    });

    // Enforcement method getTyping() on ChatService to Check Typing to show isTyping if !== account
    this.chatService.getTyping();

    // Update status and uid when have event
    this.chatService.getMsgEvent.subscribe(() => {
      this.status = this.chatService.status;
      this.uid = this.chatService.uid;
    });

  }
  // End ngOnInit

  // Send content chat and enforcement method onSend() in ChatService
  onSend(msg) { // msg is content of textarea
    this.time = new Date();
    this.chatService.onSend({
      msg: msg,
      email: firebase.auth().currentUser.email,
      time: this.time.toLocaleString()
    });
    this.chatForm.reset();
  }
  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop
      = this.feedContainer.nativeElement.scrollHeight;
  }
  canDeactivate() {
    console.log('oh yeah!');
    console.log(this.textarea.value);
    if (this.textarea.value !== null) {
      return window.confirm('Are you sure?');
    }
    return true;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

}
