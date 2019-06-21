import { Test, TestingModule } from '@nestjs/testing';
import { StationeryController } from './stationery.controller';

describe('Stationery Controller', () => {
  let controller: StationeryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StationeryController],
    }).compile();

    controller = module.get<StationeryController>(StationeryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
