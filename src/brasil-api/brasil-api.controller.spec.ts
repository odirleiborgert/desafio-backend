import { Test, TestingModule } from '@nestjs/testing';
import { BrasilApiController } from './brasil-api.controller';

describe('BrasilApiController', () => {
  let controller: BrasilApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrasilApiController],
    }).compile();

    controller = module.get<BrasilApiController>(BrasilApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
