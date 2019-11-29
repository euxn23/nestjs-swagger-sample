import { IUser, usersStub } from '../models/user';
import { ApiModelProperty } from '@nestjs/swagger';

export abstract class GetUsersRequest {
  @ApiModelProperty({ example: '10', description: 'finding user ID string, or ID array' })
  userIds?: string | string[];
}

export abstract class GetUsersResponse {
  @ApiModelProperty({ example: usersStub })
  users!: IUser[];
}
