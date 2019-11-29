export interface IUser {
  id: string;
  name: string;
  followingUserIds: string[];
}

export const userStubAlice: IUser = {
  id: '10',
  name: 'Alice',
  followingUserIds: ['11'],
};

export const userStubBeth: IUser = {
  id: '11',
  name: 'Beth',
  followingUserIds: [],
};

export const usersStub = [userStubAlice, userStubBeth];
