import { Test, TestingModule } from '@nestjs/testing';
import { 2faController } from './2fa.controller';

describe('2fa Controller', () => {
  let controller: 2faController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [2faController],
    }).compile();

    controller = module.get<2faController>(2faController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
