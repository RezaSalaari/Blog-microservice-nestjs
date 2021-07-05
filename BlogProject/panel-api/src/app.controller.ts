import { Body, Controller, Get, Inject, Param, Post, Render, Request, Res, Response } from '@nestjs/common';
import path, { resolve } from 'path';
import { AppService } from './app.service';
import { Public } from './auth/public.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }

  @Public()
  @Get('/index')
  // @Render('index.html')
  welcome(@Res() res: any) {
    res.sendFile(resolve('./views/index.html'));
  }
}