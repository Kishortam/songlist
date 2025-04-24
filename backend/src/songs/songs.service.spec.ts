// Unit Test: SongsService

// how to run => in backend/ $ npm run test  & to watch npm run test:watch


import { Test, TestingModule } from '@nestjs/testing';
import { SongsService } from './songs.service';

describe('SongsService', () => {
  let service: SongsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SongsService],
    }).compile();

    service = module.get<SongsService>(SongsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all songs', async () => {
    const result = await service.getAllSongs();
    expect(Array.isArray(result)).toBe(true);
  });

  it('should filter songs by type', async () => {
    const result = await service.getSongsByType('pop');
    result.forEach(song => expect(song.type).toBe('pop'));
  });

  it('should mark a song as favorite', async () => {
    const updated = await service.toggleFavorite(1); // assuming ID 1
    expect(typeof updated.isFavorite).toBe('boolean');
  });
});
