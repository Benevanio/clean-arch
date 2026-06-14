import { Test, TestingModule } from '@nestjs/testing'
import type { FastifyReply } from 'fastify'

import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('root', () => {
    it('should send "Hello World!"', () => {
      const send = jest.fn()

      const reply = {
        send,
      } as unknown as FastifyReply

      appController.getHello(reply)

      expect(send).toHaveBeenCalledTimes(1)
      expect(send).toHaveBeenCalledWith('Hello World!')
    })
  })
})
