

import { Body, Controller,  Get,  Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {

    constructor( private readonly userService: UserService ) {}
    @Post() 
    async createUser( @Body() createUser : CreateUserDto): Promise <User> {
        
        return this.userService.createUser(createUser)
    }

    @Get()
    async getAllUsers() {
        return this.userService.getAllUsers();
    }
}



