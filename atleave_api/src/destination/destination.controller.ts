import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ResponseDTO } from 'src/core/dto/response.dto';
import { DestinationService } from './destination.service';

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
}
