import { Test, TestingModule } from '@nestjs/testing';
import { TransaccionesCuotasController } from './transacciones-cuotas.controller';
import { TransaccionesCuotasService } from './transacciones-cuotas.service';

describe('TransaccionesCuotasController', () => {
  let controller: TransaccionesCuotasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransaccionesCuotasController],
      providers: [TransaccionesCuotasService],
    }).compile();

    controller = module.get<TransaccionesCuotasController>(TransaccionesCuotasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
