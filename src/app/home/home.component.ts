import { selectFriends } from './../store/reducers/friends.reducer';
import { receivedFriendsList } from './../store/actions/friends.actions';
import { FriendsService } from './../services/friends.service';
import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friend';
import { Store } from '@ngrx/store';
import { deleteFriend } from '../store/actions/friends.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'friends-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  friends$: Observable<Friend[]>;

  constructor(private friendsService: FriendsService, private store: Store) {
    this.friends$ = this.store.select(selectFriends);
  }

  ngOnInit(): void {
    this.friendsService.getFriendsList().subscribe(
      friends => {
/*         this.friends = friends; */
        this.store.dispatch(receivedFriendsList({ friends: friends }));
      }
    );

  }

  addAssociatedFriends(friends: Friend[]): void {
    this.friendsService.addAssociatedFriends(friends);
  }

  deleteFriend(friend: Friend): void {
    this.friendsService.deleteFriend(friend);
    this.store.dispatch(deleteFriend({ friendId: friend.id }));
  }
}
