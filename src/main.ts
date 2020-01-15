import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { logger } from './utilities/WintsonLogger';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


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
  const options = new DocumentBuilder()
    .setTitle('Survey-time REST Api')
    .setDescription('The Survey-Time API description')
    .setVersion('1.0')
    .addTag('survey')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
