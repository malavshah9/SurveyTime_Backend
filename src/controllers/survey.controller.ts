import { Controller, Get, Header, Post, Body, UsePipes, Param } from '@nestjs/common';
import { SurveyService } from '../services/servey.service';
import { SurveyDTO } from 'src/dto/survey.dto';
@Controller('survey')
export class SurveyController {
  constructor(private surveyService:SurveyService) {}

  @Get()
  @Header('Content-type','application/json')
  createSurvey(): string {
    let random=this.surveyService.getSurveyNumber();
    let custom_header={
      registration:random
    }
    return JSON.stringify(custom_header);
  }
  @Post(':registrationNumber')
  @Header('Content-type','application/json')
  setSurvey(@Body() setQuestionsDto: SurveyDTO,@Param('registrationNumber') registrationNumber:number): boolean {
      return this.surveyService.setSurvey(registrationNumber,setQuestionsDto);
  }
  @Get(':registrationNumber')
  @Header('Content-type','application/json')
  getSurvey(@Param('registrationNumber') registrationNumber:number): boolean {
      return this.surveyService.getSurvey(registrationNumber);
  }
}
