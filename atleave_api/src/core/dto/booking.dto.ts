import { ApiProperty } from '@nestjs/swagger';

export class BookingDTO {
  //
  @ApiProperty({
    name: 'email',
    type: String,
    required: true,
    title: 'User Email',
  })
  email: string;

  @ApiProperty({
    name: 'phone',
    type: String,
    required: true,
    title: 'User Phone',
  })
  phone: string;

  @ApiProperty({
    name: 'name',
    type: String,
    required: true,
    title: 'User Name',
  })
  name: string;

  @ApiProperty({
    name: 'peoples',
    type: String,
    required: true,
    title: 'Number of peoples',
  })
  peoples: string;

  @ApiProperty({
    name: 'destination',
    type: String,
    required: true,
    title: 'Destination to go to',
  })
  destination: string;

  constructor(
    email: string,
    phone: string,
    name: string,
    peoples: string,
    destination: string,
  ) {
    this.email = email;
    this.name = name;
    this.destination = destination;
    this.peoples = peoples;
    this.phone = phone;
  }
}
