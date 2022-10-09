import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'friends-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.scss'],
})
export class AddFriendsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  friendForm = this.formBuilder.group({
    name: [''],
    age: [''],
    weight: [''],
    friends: [''],
  });

  ngOnInit(): void {}
}
