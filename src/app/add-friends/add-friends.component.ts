import { FriendsService } from './../services/friends.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Friend } from '../models/friend';

@Component({
  selector: 'friends-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.scss'],
})
export class AddFriendsComponent {

  constructor(private formBuilder: FormBuilder, private friendsService: FriendsService) {}

  @Input() friends: Friend[] = [];

  friendForm = this.formBuilder.group({
    name: [''],
    age: [''],
    weight: [''],
    friends: [''],
  });

  onSubmit(friendData: any): void {
    const newFriend: Friend = {
      name: friendData.name,
      age: parseInt(friendData.age),
      weight: parseInt(friendData.weight),
      friends: friendData.friends
    }
    this.friendsService.addFriend(newFriend);
    this.friendForm.reset();
  }
}
