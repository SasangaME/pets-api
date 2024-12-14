import { Controller, Get } from '@nestjs/common';
import { AppService, HealthCheckDto } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health')
  getHealthCheck(): HealthCheckDto {
    return this.appService.getHealthCheck();
  }
}
