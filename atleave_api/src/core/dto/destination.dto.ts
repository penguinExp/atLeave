import { ApiProperty } from '@nestjs/swagger';

export class DestinationDto {
  //
  @ApiProperty({
    name: 'id',
    type: Number,
    description: 'ID of the destination entity',
  })
  id: number;

  @ApiProperty({
    name: 'image',
    type: String,
    description: 'Source of the image to be shown',
  })
  image: string;

  @ApiProperty({
    name: 'title',
    type: String,
    description: 'Title of the destination',
  })
  title: string;

  @ApiProperty({
    name: 'from',
    type: String,
    description: 'A place from where the tour begins',
  })
  from: string;

  @ApiProperty({
    name: 'price',
    type: String,
    description: 'Price of the tour',
  })
  price: string;

  @ApiProperty({
    name: 'noOfDays',
    type: String,
    description: 'No of days of the tour',
  })
  noOfDays: string;

  @ApiProperty({
    name: 'itinerary',
    type: String,
    description: 'Description about the tour',
  })
  itinerary: string;

  constructor({ id, image, title, from, noOfDays, price, itinerary }) {
    this.from = from;
    this.id = id;
    this.image = image;
    this.noOfDays = noOfDays;
    this.price = price;
    this.title = title;
    this.itinerary = itinerary;
  }
}
