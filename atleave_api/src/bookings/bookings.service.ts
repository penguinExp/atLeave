import { HttpStatus, Injectable } from '@nestjs/common';
import { BookingDTO } from 'src/core/dto/booking.dto';
import { ResponseDTO } from 'src/core/dto/response.dto';
import { supabase } from 'src/core/supabase';

@Injectable()
export class BookingsService {
  /**
   * Inserting Booking Data in the `bookings` table
   *
   * @param dto {BookingDTO}
   * @returns {ResponseDTO}
   */
  async createBooking(dto: BookingDTO): Promise<ResponseDTO> {
    //
    const res = new ResponseDTO();

    const { data, error } = await supabase.from('bookings').insert([
      {
        email: dto.email,
        phone: dto.phone,
        name: dto.name,
        peoples: dto.peoples,
        destination: dto.destination,
      },
    ]);

    if (error?.code) {
      res.error = error.hint;
      res.message = [error.message, error.code];
      res.statusCode = HttpStatus.AMBIGUOUS;
    }

    res.data = data;

    return res;
  }
}
