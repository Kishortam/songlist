import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { Song } from './song.entity';


// module for songs
@Module({
  imports: [TypeOrmModule.forFeature([Song])],  // import song entity
  providers: [SongsService],            // provide songs service
  controllers: [SongsController],      // provide songs controller
})
export class SongsModule {}