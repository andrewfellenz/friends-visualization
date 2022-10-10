import { FriendsService } from './../services/friends.service';
import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friend';

@Component({
  selector: 'friends-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private friendsService: FriendsService) { }

  friends: Friend[] = [];

  ngOnInit(): void {
    this.friendsService.getFriendsList().subscribe(
      friends => this.friends = friends
    );
  }

  addAssociatedFriends(friends: Friend[]): void {
    this.friendsService.addAssociatedFriends(friends);
  }

  deleteFriend(deletedFriend: Friend): void {
    this.friendsService.deleteFriend(deletedFriend);
  }
}
