import { Global, Module } from '@nestjs/common';

const API_KEY_EXAMPLE = '123456';

@Global()
@Module({
  providers: [
    {
      provide: API_KEY_EXAMPLE,
      useValue: (process.env.NODE = API_KEY_EXAMPLE),
    },
  ],
  exports: [API_KEY_EXAMPLE],
})
export class DatabaseModule {}
