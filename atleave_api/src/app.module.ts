import { Module } from '@nestjs/common';
import { DestinationModule } from './destination/destination.module';
import { BookingsModule } from './bookings/bookings.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  providers: [],
  imports: [DestinationModule, BookingsModule, AuthModule],
})
export class AppModule {}
