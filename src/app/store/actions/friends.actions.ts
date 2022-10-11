import { createAction, props } from '@ngrx/store';

export const enterHomePage = createAction(
  '[Home Page] first visit'
);

export const addFriend = createAction(
  '[Home Page] add new friend to list',
  // props<{ username: string; password: string }>()
);

export const addAssociatedFriends = createAction(
  '[Home Page] add associated friends to existing friend on list',
  // props<{ username: string; password: string }>()
);

export const deleteFriend = createAction(
  '[Home Page] delete friend from list',
  // props<{ username: string; password: string }>()
);
