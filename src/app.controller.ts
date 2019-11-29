import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetUsersRequest, GetUsersResponse } from './dto/get-users.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  @ApiResponse({ status: HttpStatus.OK, type: GetUsersResponse, description: 'fetch users by query' })
  async getUsers(
    @Query() { userIds }: GetUsersRequest,
  ): Promise<GetUsersResponse> {
    const users = await this.appService.getUsers(userIds);

    return { users };
  }
}
