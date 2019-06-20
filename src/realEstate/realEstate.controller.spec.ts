import { Test, TestingModule } from '@nestjs/testing';
import { RealestateController } from './realEstate.controller';

describe('Realestate Controller', () => {
  let controller: RealestateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealestateController],
    }).compile();

    controller = module.get<RealestateController>(RealestateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
