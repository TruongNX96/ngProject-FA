import { Component, OnInit } from '@angular/core';
import { ManageBookService } from './manageBook.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-bookself',
  templateUrl: './bookself.component.html',
  styleUrls: ['./bookself.component.css']
})
export class BookselfComponent implements OnInit {
  libraryBook = this.manageBookService.libraryBook;
  bookid2;
  image2;
  description2;
  title2;
  authors2;
  constructor(
    private manageBookService: ManageBookService
  ) { }

  ngOnInit() {
    // Get book when initialization component
    this.manageBookService.getBook();
    console.log('account1 nek:', firebase.auth().currentUser);
    this.manageBookService.getBookEvent.subscribe(() => {
      this.libraryBook = this.manageBookService.libraryBook;
    });
  }
  delBook(book) {
    this.manageBookService.delBook(book);
  }
  creatBook() {
    this.manageBookService.creatBook(this.bookid2, this.title2, this.description2, this.image2, this.authors2);
  }

}
