/* eslint-disable @typescript-eslint/unbound-method */

import { ConfigService } from '@nestjs/config'
import { EnvConfigService } from '../../env-config.service'

describe('EnvConfigService', () => {
  let service: EnvConfigService
  let configService: jest.Mocked<ConfigService>

  beforeEach(() => {
    configService = {
      get: jest.fn(),
    } as unknown as jest.Mocked<ConfigService>

    service = new EnvConfigService(configService)
  })

  describe('getAppPort', () => {
    it('deve retornar a porta configurada', () => {
      configService.get.mockReturnValue(8080)

      const result = service.getAppPort()

      expect(result).toBe(8080)
      expect(configService.get).toHaveBeenCalledWith('PORT', 3000)
    })
  })

  describe('getNodeEnv', () => {
    it('deve retornar o ambiente configurado', () => {
      configService.get.mockReturnValue('production')

      const result = service.getNodeEnv()

      expect(result).toBe('production')
      expect(configService.get).toHaveBeenCalledWith('NODE_ENV', 'development')
    })
  })
})
