import { Friend } from 'src/app/models/friend';
import { createAction, props } from '@ngrx/store';

export const enterHomePage = createAction(
  '[Home Page] first visit'
);

export const receivedFriendsList = createAction(
  '[Home Page] received friends successfully',
  props<{ friends: ReadonlyArray<Friend> }>()
);

export const addFriend = createAction(
  '[Home Page] add new friend to list',
  props<{ friend: Friend }>()
);

export const addAssociatedFriends = createAction(
  '[Home Page] add associated friends to existing friend on list',
  props<{ friend: Friend; newAssociatedFriends: Friend[] }>()
);

export const deleteFriend = createAction(
  '[Home Page] delete friend from list',
  props<{ friendId: number }>()
);
