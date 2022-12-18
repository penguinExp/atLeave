import { Module } from '@nestjs/common';
import { DestinationModule } from './destination/destination.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  controllers: [],
  providers: [],
  imports: [DestinationModule, BookingsModule],
})
export class AppModule {}
