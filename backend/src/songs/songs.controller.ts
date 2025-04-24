import { Controller, Get, Query, Patch, Param } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  // find all songs with query and type 
  @Get()
  findAll(@Query('query') query?: string, @Query('type') type?: string) {
    return this.songsService.findAll(query, type);
  }

  @Patch(':id/favorite')
  toggleFavorite(@Param('id') id: number) {
    return this.songsService.toggleFavorite(id);
  }
}