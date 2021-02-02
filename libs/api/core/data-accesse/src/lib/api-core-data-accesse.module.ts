import { Module } from '@nestjs/common';
import { ApiCoreDataAccesseService } from './api-core-data-accesse.service';

@Module({
  controllers: [],
  providers: [
    ApiCoreDataAccesseService
  ],
  exports: [
    ApiCoreDataAccesseService
  ],
})
export class ApiCoreDataAccesseModule {}
