import { FriendsService } from './../services/friends.service';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Friend } from '../models/friend';

@Component({
  selector: 'friends-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.scss'],
})
export class AddFriendsComponent {

  constructor(private formBuilder: FormBuilder, private friendsService: FriendsService) {}

  @Input() friends: Friend[] | null = [];

  friendForm = this.formBuilder.group({
    name: [''],
    age: [''],
    weight: [''],
    friends: [''],
  });

  onSubmit(friendData: any): void {
    this.friendsService.addFriend(friendData);
    this.friendForm.reset();
  }
}
