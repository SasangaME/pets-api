import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getHealthCheck(): HealthCheckDto {
    return {
      title: this.configService.get<string>('TITLE'),
      version: this.configService.get<string>('VERSION'),
      env: this.configService.get<string>('ENV'),
    };
  }
}

export interface HealthCheckDto {
  title: string;
  version: string;
  env: string;
}
