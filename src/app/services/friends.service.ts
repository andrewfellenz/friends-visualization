import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mockFriends } from '../mock-data/mock-friends';
import { Friend } from '../models/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  friends: BehaviorSubject<Friend[]> = new BehaviorSubject(mockFriends);

  getFriendsList(): BehaviorSubject<Friend[]> {
    return this.friends;
  }

  addFriend(friend: Friend): void {
    const newFriend: Friend = {
      id: this.generateId(),
      name: friend.name,
      age: friend.age,
      weight: friend.weight,
      friends: friend.friends
    }
    this.friends.next([...this.friends.value, newFriend]);
  }

  addAssociatedFriends(newFriends: Friend[]): void {
    this.friends.next([...this.friends.value, ...newFriends]);
  }

  deleteFriend(deletedFriend: Friend): void {
    this.friends.next(this.friends.value.filter(friend => friend.id !== deletedFriend.id));
  }

  generateId(): number {
    let newId = 0;
    this.friends.value.forEach(friend => {
      if (friend.id >= newId)
        newId = friend.id + 1
    });
    return newId;
  }
}
