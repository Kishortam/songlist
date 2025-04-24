// // Unit Test SongsController

// // how to run => in backend/ $ npm run test  & to watch npm run test:watch

// import { Test, TestingModule } from '@nestjs/testing';
// import { SongsController } from './songs.controller';
// import { SongsService } from './songs.service';

// describe('SongsController', () => {
//   let controller: SongsController;
//   let service: SongsService;

//   const mockService = {
//     getAllSongs: jest.fn(() => Promise.resolve([{ id: 1, title: 'Test Song' }])),
//     getSongsByType: jest.fn((type: string) => Promise.resolve([{ id: 2, type }])),
//     toggleFavorite: jest.fn((id: number) => Promise.resolve({ id, isFavorite: true })),
//   };

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [SongsController],
//       providers: [{ provide: SongsService, useValue: mockService }],
//     }).compile();

//     controller = module.get<SongsController>(SongsController);
//     service = module.get<SongsService>(SongsService);
//   });

//   it('should return all songs', async () => {
//     const result = await controller.getAllSongs();
//     expect(result).toEqual([{ id: 1, title: 'Test Song' }]);
//   });

//   it('should filter songs by type', async () => {
//     const result = await controller.getSongsByType('rock');
//     expect(result).toEqual([{ id: 2, type: 'rock' }]);
//   });

//   it('should toggle favorite status', async () => {
//     const result = await controller.toggleFavorite(1);
//     expect(result).toEqual({ id: 1, isFavorite: true });
//   });
// });
