import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mockFriends } from '../mock-data/mock-friends';
import { Friend } from '../models/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor() { }

  friends: BehaviorSubject<Friend[]> = new BehaviorSubject(mockFriends);

  getFriendsList(): BehaviorSubject<Friend[]> {
    return this.friends;
  }

  addFriend(newFriend: Friend): void {
    this.friends.next([...this.friends.value, newFriend]);
  }

  addAssociatedFriends(newFriends: Friend[]): void {
    this.friends.next([...this.friends.value, ...newFriends]);
  }

  deleteFriend(deletedFriend: Friend): void {
    this.friends.next(this.friends.value.filter(friend => friend != deletedFriend));
  }
}
