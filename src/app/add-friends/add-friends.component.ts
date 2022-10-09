import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { mockFriends } from '../mock-data/mock-friends';
import { Friend } from '../models/friend';

@Component({
  selector: 'friends-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.scss'],
})
export class AddFriendsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  mockFriends: Friend[] = mockFriends;

  friendForm = this.formBuilder.group({
    name: [''],
    age: [''],
    weight: [''],
    friends: [''],
  });

  ngOnInit(): void {}
}
