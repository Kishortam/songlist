import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
  ) {}


  // functions for search song by title, search song by type and toggle favorite

  findAll(query?: string, type?: string) {   // find all
    const where: any = {};
    if (query) where.title = query;     // if query is not empty and title is equal to query
    if (type) where.type = type;       // if type is not empty and type is equal to type
    return this.songsRepository.find({ where });  // find
  }

  async toggleFavorite(id: number) {    
    const song = await this.songsRepository.findOneBy({ id });  // find by id
    if (song) {        // if song exists
      song.isFavorite = !song.isFavorite;  // toggle favorite // if song is favorite, make it not favorite
      await this.songsRepository.save(song); // save
    }
    return song;
  }
}