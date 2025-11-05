import { Test, TestingModule } from '@nestjs/testing';
import { TransaccionesCuotasService } from './transacciones-cuotas.service';

describe('TransaccionesCuotasService', () => {
  let service: TransaccionesCuotasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransaccionesCuotasService],
    }).compile();

    service = module.get<TransaccionesCuotasService>(TransaccionesCuotasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
