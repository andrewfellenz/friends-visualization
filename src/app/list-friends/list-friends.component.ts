import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Friend } from '../models/friend';

@Component({
  selector: 'friends-list-friends',
  templateUrl: './list-friends.component.html',
  styleUrls: ['./list-friends.component.scss']
})
export class ListFriendsComponent {

  constructor() { }

  @Input() friends: Friend[] = [];

  @Output() addAssociatedFriendsEmitter: EventEmitter<Friend[]> = new EventEmitter<Friend[]>();
  @Output() deleteFriendEmitter: EventEmitter<Friend> = new EventEmitter<Friend>();
  @Output() selectFriendEmitter: EventEmitter<Friend> = new EventEmitter<Friend>();

  deleteFriend(friend: Friend): void {
    this.deleteFriendEmitter.emit(friend);
  }

  selectFriend(friend: Friend): void {
    this.selectFriendEmitter.emit(friend);
  }
  
  // addAssociatedFriends(friends: Friend): void {
  //   this.addAssociatedFriendsEmitter.emit(friends)
  // }

  addAssociatedFriends(): void {
    console.log("noop");
  }
}
