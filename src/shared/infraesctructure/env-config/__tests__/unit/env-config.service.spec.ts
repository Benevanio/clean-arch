import { ConfigService } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { EnvConfigService } from '../../env-config.service'

describe('EnvConfigService Unit Test', () => {
  let sut: EnvConfigService

  const mockConfigService = {
    get: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EnvConfigService,
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    }).compile()

    sut = module.get<EnvConfigService>(EnvConfigService)
  })

  it('should be defined', () => {
    expect(sut).toBeDefined()
  })
})
