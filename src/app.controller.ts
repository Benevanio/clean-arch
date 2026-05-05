import { Controller, Get, Res } from '@nestjs/common';
import type { FastifyReply } from 'fastify';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: FastifyReply): void {
    res.send(this.appService.getHello());
  }
}