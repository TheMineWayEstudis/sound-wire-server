import { IsString, IsUrl, MaxLength } from 'class-validator';

export class DownloadByUrlDTO {
  @IsString()
  @IsUrl({ host_whitelist: ['music.youtube.com', 'youtube.com'] })
  @MaxLength(256)
  url: string;
}
