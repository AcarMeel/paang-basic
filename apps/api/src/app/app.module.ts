import { Module } from '@nestjs/common';

import { ApiCoreFeatureModule } from '@paang/api/core/feature';
import { ApiCoreDataAccesseModule } from '@paang/api/core/data-accesse';

@Module({
  imports: [
    ApiCoreFeatureModule,
    ApiCoreDataAccesseModule
  ],
})
export class AppModule {}
