import { Module } from '@nestjs/common';
import { DownloadModule } from './download/download.module';
import { ApiKeyGuard, ApiKeysModule } from 'nestjs-api-keys';
import { ENV } from '../constants/env/env.constant';
import { APP_GUARD } from '@nestjs/core';

const GLOBAL_PERMISSION = 'download.all';

@Module({
  imports: [
    ApiKeysModule.register({
      apiKeys: [
        {
          name: 'For downloading',
          keys: [ENV.API_KEY],
          permissions: [GLOBAL_PERMISSION],
        },
      ],
    }),
    DownloadModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard({ permissions: [GLOBAL_PERMISSION] }),
    },
  ],
})
export class AppModule {}
