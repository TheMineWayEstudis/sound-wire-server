import { Injectable } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ytdl = require('ytdl-core');

@Injectable()
export class DownloadService {
  async downloadByUrl(url: string, response: Response) {
    await new Promise<void>((resolve) => {
      ytdl(url, {
        filter: (format) => format.container === 'mp4',
      })
        .pipe(response)
        .on('finish', () => resolve());
    });
  }
}
