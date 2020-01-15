import { Controller, Get, Header, Post, Body, UsePipes, Param } from '@nestjs/common';
import { SurveyService } from '../services/servey.service';
import { SurveyDTO } from '../dto/survey.dto';
import { ResponseDTO } from '../dto/responses.dto';
import { QuestionDTO } from 'src/dto/question.dto';
import { isUndefined } from 'util';
import { ArrayValidationPipe } from '../utilities/ArrayValidationPipe';
import { Logger } from '@nestjs/common';
import { logger } from '../utilities/WintsonLogger';
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
    Logger.log(" GET   /survey ","",true);
    logger.info(" GET   /survey ","",true);
    return JSON.stringify(custom_header);
  }
  @Post(':registrationNumber')
  @Header('Content-type','application/json')
  @UsePipes(ArrayValidationPipe(QuestionDTO))
  setSurvey(@Body("questions") setQuestionsDto: QuestionDTO[],@Param('registrationNumber') registrationNumber:number): boolean {
      Logger.log(` POST   /survey/${registrationNumber} `,"",true);
      logger.info(` POST   /survey/${registrationNumber} `,"",true);
      if(!isUndefined(setQuestionsDto))
      return this.surveyService.setSurvey(registrationNumber,setQuestionsDto);
      else
      return false;
  }
  @Post('/response/:registrationNumber')
  @Header('Content-type','application/json')
  setResponse(@Body() responses: ResponseDTO,@Param('registrationNumber') registrationNumber:number): boolean | void {
    Logger.log(` POST   survey/response/${registrationNumber} `,"",true);
    logger.info(` POST   survey/response/${registrationNumber} `,"",true);
    return this.surveyService.getResponse(responses,registrationNumber);
  }
  @Get(':registrationNumber')
  @Header('Content-type','application/json')
  getSurvey(@Param('registrationNumber') registrationNumber:number): SurveyDTO {
    Logger.log(` GET   /survey/${registrationNumber} `,"",true);
    logger.info(` GET   /survey/${registrationNumber} `,"",true);
    let temp=this.surveyService.getSurvey(registrationNumber);
    return temp;
  }
  @Post('/reset')
  @Header('Content-type','application/json')
  resetSurveyServer(): boolean | void {
    Logger.log(` POST   reset/ `,"",true);
    logger.warn(` POST   survey/ `,"",true);
    return this.surveyService.resetSurveyServer();
  }
}
