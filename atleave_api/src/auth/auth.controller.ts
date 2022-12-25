import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ResponseDTO } from 'src/core/dto/response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get('/email')
  async getAuthDetails(@Query('email') email: string): Promise<ResponseDTO> {
    const res = new ResponseDTO();

    const isExists = await this.service.getAuthDetails(email);

    if (isExists) {
      res.error = null;
      res.statusCode = 200;
    } else {
      res.error = null;
      res.statusCode = 201;
    }

    return res;
  }

  @Get()
  async loginUser(
    @Query('email') email: string,
    @Query('passwd') passwd: string,
  ): Promise<ResponseDTO> {
    return this.service.logInUser(email, passwd);
  }

  @Post()
  async signupUser(@Body() body: any): Promise<ResponseDTO> {
    return this.service.createAuthUser(body.email, body.passwd);
  }
}
