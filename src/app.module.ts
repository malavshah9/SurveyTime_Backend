import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyController } from './controllers/survey.controller';
import { SurveyService } from './services/servey.service';
import { RandomGeneratorModule } from './utilities/random_generator.module';
@Module({
  imports: [
    RandomGeneratorModule
  ],
  controllers: [AppController,SurveyController],
  providers: [AppService,SurveyService],
})
export class AppModule {}
