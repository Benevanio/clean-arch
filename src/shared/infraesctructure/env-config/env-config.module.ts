import { DynamicModule, Module } from '@nestjs/common'
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config'
import { join } from 'node:path'
import { EnvConfigService } from './env-config.service'

@Module({
  providers: [EnvConfigService],
})
export class EnvConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
    return {
      module: EnvConfigModule,
      imports: [
        ConfigModule.forRoot({
          ...options,
          envFilePath: [
            join(process.cwd(), '.env'),
            join(process.cwd(), `.env.${process.env.NODE_ENV}`),
          ],
        }),
      ],
      providers: [EnvConfigService],
      exports: [EnvConfigService],
    }
  }
}
