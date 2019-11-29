import { Injectable } from '@nestjs/common';
import { IUser, usersStub } from './models/user';

@Injectable()
export class AppService {
  async getUsers(userIds?: string | string[]): Promise<IUser[]> {
    if (!userIds || (Array.isArray(userIds) && !userIds.length)) {
      return usersStub;
    } else if (Array.isArray(userIds)) {
      return userIds.reduce((users, id) => {
        const user = usersStub.find(stub => stub.id === id);
        return user ? [...users, user] : users;
      }, [] as IUser[]);
    } else {
      const userId = userIds;
      const user = usersStub.find(stub => stub.id === userId);
      return user ? [user] : [];
    }
  }
}
