import { Test, TestingModule } from '@nestjs/testing';
import { PasswordController } from './password.controller';

describe('Password Controller', () => {
  let controller: PasswordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasswordController],
    }).compile();

    controller = module.get<PasswordController>(PasswordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
