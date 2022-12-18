import { Controller, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Body } from '@nestjs/common/decorators';
import { BookingDTO } from 'src/core/dto/booking.dto';
import { ResponseDTO } from 'src/core/dto/response.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Bookings')
@Controller('bookings')
export class BookingsController {
  //
  constructor(private readonly service: BookingsService) {}

  @Post()
  async createBooking(@Body() body: BookingDTO): Promise<ResponseDTO> {
    let res = new ResponseDTO();
    res = await this.service.createBooking(body);

    if (!res.error) {
      res.statusCode = 201;
      res.message = ['Booking created successfully!'];
    }

    return res;
  }
}
