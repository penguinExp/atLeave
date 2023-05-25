import { HttpStatus, Injectable } from '@nestjs/common';
import { DestinationDto } from 'src/core/dto/destination.dto';
import { ResponseDTO } from 'src/core/dto/response.dto';
import { ReviewDto } from 'src/core/dto/review.dto';
import { supabase } from 'src/core/supabase';
import axios from 'axios';

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

  /**
   * Getting data from the `destination` table
   *
   * @returns {ResponseDTO}
   */
  async getDestinationsPics(): Promise<ResponseDTO> {
    //
    const res = new ResponseDTO();

    const { data, error } = await supabase
      .from('destination')
      .select('pics')
      .limit(10);

    if (error?.code) {
      res.statusCode = HttpStatus.AMBIGUOUS;
      res.message = [error.message, error.code];
      res.error = error.hint;
      return res;
    }

    res.data = data;

    return res;
  }

  async createReview(body: ReviewDto): Promise<ResponseDTO> {
    const res = new ResponseDTO();

    const score = await this.calculateScore(body.text);

    const { data, error } = await supabase.from('reviews').insert([
      {
        destination_id: body.destinationId,
        rating: score,
        text: body.text,
      },
    ]);

    if (error) {
      res.statusCode = HttpStatus.AMBIGUOUS;
      res.message = [error.message, error.code];
      res.error = error.hint;
      return res;
    }

    res.data = data;

    return res;
  }

  async fetchReviews(id: number) {
    const res = new ResponseDTO();

    const { data, error } = await supabase
      .from('reviews')
      .select(`*`)
      .eq('destination_id', id);

    if (error?.code) {
      res.statusCode = HttpStatus.AMBIGUOUS;
      res.message = [error.message, error.code];
      res.error = error.hint;
      return res;
    }

    res.data = data;

    return res;
  }

  async calculateScore(text: string): Promise<number> {
    let res = await axios.get(`http://127.0.0.1:8000/${text}`);

    const score = res.data['res'];

    return score;
  }
}
