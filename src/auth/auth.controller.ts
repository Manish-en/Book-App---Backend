import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}

    @Post('/signup')
    signUp(@Body() signUpDto : SignUpDto) : Promise<{ token : String } > {
        return this.authService.signUp(signUpDto);
    }

    @Get('/login')
    login(@Body() loginDto : LoginDto) : Promise<{ token : String } > {
        return this.authService.login(loginDto);
    }
}
