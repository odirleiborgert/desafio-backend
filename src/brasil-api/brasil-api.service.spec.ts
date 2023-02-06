import { Test, TestingModule } from '@nestjs/testing';
import { BrasilApiService } from './brasil-api.service';

describe('BrasilApiService', () => {
  let service: BrasilApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrasilApiService],
    }).compile();

    service = module.get<BrasilApiService>(BrasilApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
