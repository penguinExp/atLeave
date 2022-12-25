import { HttpStatus, Injectable } from '@nestjs/common';
import { ResponseDTO } from 'src/core/dto/response.dto';
import { supabase } from 'src/core/supabase';

@Injectable()
export class AuthService {
  async getAuthDetails(email: string): Promise<boolean> {
    let { data, error } = await supabase
      .from('auth')
      .select(`email`)
      .eq('email', email)
      .single();

    if (data && !error) {
      return true;
    }

    return false;
  }

  async logInUser(email: string, passwd: string): Promise<ResponseDTO> {
    const res = new ResponseDTO();

    const { data } = await supabase
      .from('auth')
      .select(`*`)
      .eq('email', email)
      .single();

    if (data.email == email && data.passwd == passwd) {
      res.data = { uid: data.id };
      res.error = null;
      res.statusCode = HttpStatus.OK;
      res.message = ['User logged in successfully'];
    } else {
      res.data = null;
      res.error = 'Wrong credentials';
      res.message = ['Please enter correct password'];
      res.statusCode = HttpStatus.NOT_ACCEPTABLE;
    }

    return res;
  }

  async createAuthUser(email: string, passwd: string): Promise<ResponseDTO> {
    const res = new ResponseDTO();

    const { data, error } = await supabase.from('auth').upsert({
      email: email,
      passwd: passwd,
    });

    if (!data && !error) {
      res.error = null;
      res.message = ['User created successfully!'];
      res.statusCode = HttpStatus.CREATED;
    } else {
      res.error = error.message;
      res.message = ["User can't be created", error.details];
      res.statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
    }

    return res;
  }
}
