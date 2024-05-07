import { Controller, Get, Query, Res } from '@nestjs/common';
import { DownloadByUrlDTO } from '../../dtos/download/download-by-url.dto';
import { DownloadService } from './download.service';

@Controller('download')
export class DownloadController {
  constructor(private readonly downloadService: DownloadService) {}
  @Get()
  async download(
    @Query() { url }: DownloadByUrlDTO,
    @Res() response: Response,
  ) {
    await this.downloadService.downloadByUrl(url, response);
  }
}
