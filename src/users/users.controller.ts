import { Controller, Request, Post, UseGuards, Body, Get, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { AuthGuard } from '@nestjs/passport';
// import { LocalAuthGuard } from 'src/auth/local-auth.guard';
// import { AuthService } from 'src/auth/auth.service';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { request } from 'express';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService,) { }

    // API ในการสมใัครบัญชี
    // @Post('/signup')
    //     makesignup(@Body() CreateUserDto:CreateUserDto){
    //         return this.usersService.SignupUser(CreateUserDto);
    //     }

    // // API update email
    // @Patch('/updateemail')
    // updateEmail(@Body() CreateUserDto : CreateUserDto){
    //     return this.usersService.updateEmail(CreateUserDto);
    // }

}
