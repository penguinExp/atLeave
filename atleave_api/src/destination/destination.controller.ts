import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { ResponseDTO } from 'src/core/dto/response.dto';
import { DestinationService } from './destination.service';
import { ReviewDto } from 'src/core/dto/review.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('destination')
export class DestinationController {
  constructor(private readonly service: DestinationService) {}

  @Get()
  async getDestinationsData(): Promise<ResponseDTO> {
    let res = new ResponseDTO();

    res = await this.service.getDestinationsData();

    if (!res.error) {
      res.message = ['Successfully fetched the data'];
      res.statusCode = HttpStatus.OK;
      res.error = null;
    }

    return res;
  }

  @Get('pics')
  async getDestinationPics(): Promise<ResponseDTO> {
    let res = new ResponseDTO();

    res = await this.service.getDestinationsPics();

    if (!res.error) {
      res.message = ['Successfully fetched the data'];
      res.statusCode = HttpStatus.OK;
      res.error = null;
    }

    return res;
  }

  @Post('review')
  async createReview(@Body() body: ReviewDto) {
    let res = new ResponseDTO();

    res = await this.service.createReview(body);

    if (res.error) {
      return res;
    }

    res.message = ['Successfully fetched the data'];
    res.statusCode = HttpStatus.CREATED;
    res.error = null;

    return res;
  }

  @Get('review')
  async fetchReviews(@Query('id') id: number) {
    let res = new ResponseDTO();

    res = await this.service.fetchReviews(id);

    if (!res.error) {
      res.message = ['Successfully fetched the data'];
      res.statusCode = HttpStatus.OK;
      res.error = null;
    }

    return res;
  }
}
