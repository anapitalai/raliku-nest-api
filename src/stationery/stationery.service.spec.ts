import { Test, TestingModule } from '@nestjs/testing';
import { StationeryService } from './stationery.service';

describe('StationeryService', () => {
  let service: StationeryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StationeryService],
    }).compile();

    service = module.get<StationeryService>(StationeryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
