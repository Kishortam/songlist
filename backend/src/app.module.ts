import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsModule } from './songs/songs.module';
import { Song } from './songs/song.entity';


// add postgres and credentials
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // So it's available everywhere
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',       // change to your postgres username
      password: 'kishor@1996',    // password you mentioned on postgres
      database: 'music_app',      // database name
      entities: [Song],           // data
      synchronize: true,
      url: process.env.DATABASE_URL,
    }),
    SongsModule,
  ],
})
export class AppModule {}
