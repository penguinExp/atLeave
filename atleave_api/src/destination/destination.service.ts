import { HttpStatus, Injectable } from '@nestjs/common';
import { DestinationDto } from 'src/core/dto/destination.dto';
import { ResponseDTO } from 'src/core/dto/response.dto';
import { supabase } from 'src/core/supabase';

@Injectable()
export class DestinationService {
  /**
   * Getting data from the `destination` table
   *
   * @returns {ResponseDTO}
   */
  async getDestinationsData(): Promise<ResponseDTO> {
    //
    const destinations: Array<DestinationDto> = [];
    let dataArray: Array<any>;
    const res = new ResponseDTO();

    const { data, error } = await supabase
      .from('destination')
      .select('*')
      .limit(10);

    if (error?.code) {
      res.statusCode = HttpStatus.AMBIGUOUS;
      res.message = [error.message, error.code];
      res.error = error.hint;
      return res;
    }

    dataArray = data;

    for (const i in dataArray) {
      //
      destinations.push(
        new DestinationDto({
          id: dataArray[i]['id'],
          from: dataArray[i]['from'],
          image: dataArray[i]['image'],
          noOfDays: dataArray[i]['noOfDays'],
          price: dataArray[i]['price'],
          title: dataArray[i]['title'],
          itinerary: dataArray[i]['itinerary'],
        }),
      );
    }

    res.data = destinations;

    return res;
  }
}
