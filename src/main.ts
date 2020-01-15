import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { logger } from './utilities/WintsonLogger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger:['error','warn','verbose','log','debug']
  });
  app.useGlobalPipes(new ValidationPipe({
    forbidUnknownValues:true,
    whitelist:true,
    transform:true,
    skipMissingProperties:true,
    skipUndefinedProperties:true,
    skipNullProperties:true
  }));
  app.useLogger(logger);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
