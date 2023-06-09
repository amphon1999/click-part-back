/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userInfo } from 'os';
import { Register } from 'src/interfaces/Register';
import { Users } from 'src/users/entities/users.entity';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/loginDto';
import { RegisterDto } from './dto/registerDto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller({
    version: '1',
    path:'auth'})
export class AuthController {
    constructor(private readonly authService:AuthService,
                private readonly usersService:UsersService
        ) {
        
    }
    
    //localhost:3000/api/v1/auth/users
    @Get('users')
    findAllUsers(){
        return this.usersService.findAll();
    }

    //localhost:3000/api/v1/auth/login
    @Post('login')
    @HttpCode(200)
    login(@Body() loginDto: LoginDto) {  
        // console.log(loginDto)
        return this.authService.login(loginDto.email, loginDto.password)

    }

    // localhost:3000/api/v1/auth/register
    @Post('register')
    // @UsePipes(ValidationPipe)
    register(@Body() registerDto:RegisterDto){
    const {  FullName, CodeUserId, Email,
              Password, Permission } = registerDto;
      console.log(`${FullName}, ${CodeUserId}, ${Email}, ${Password}, ${Permission}`)         
    return this.authService.register(registerDto)
    }

    // localhost:3000/api/v1/auth/profiles  + with token access
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Req() req:any){
        console.log(req)
        return req.user;
    }
}



