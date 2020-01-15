import { Controller, Get, Header, Post, Body, UsePipes, Param } from '@nestjs/common';
import { SurveyService } from '../services/servey.service';
import { SurveyDTO } from '../dto/survey.dto';
import { ResponseDTO } from '../dto/responses.dto';
import { QuestionDTO } from '../dto/question.dto';
import { isUndefined } from 'util';
import { ArrayValidationPipe } from '../utilities/ArrayValidationPipe';
import { Logger } from '@nestjs/common';
import { logger } from '../utilities/WintsonLogger';
import { ApiBody,ApiParam, ApiResponse } from '@nestjs/swagger';
@Controller('survey')
export class SurveyController {
  constructor(private surveyService:SurveyService) {}

  @Get()
  @Header('Content-type','application/json')
  @ApiResponse({ status: 200, description: 'You have successfully registered for making survey. Response is your registration number'})
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
  @ApiBody({ type: [QuestionDTO] })
  @ApiResponse({ status: 200, description: 'You have successfully set the questions in your survey.'})
  @ApiParam({
    name:"4 Digit Survey Registration Number",
    example:"2345",
    allowEmptyValue:false,
    description:"Survey Registration Number which provided by /survey REST Api after calling it.",
    type:Number,
    required:true
  })
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
  @ApiBody({ type: [ResponseDTO] })
  @ApiParam({
    name:"4 Digit Survey Registration Number",
    example:"2345",
    allowEmptyValue:false,
    description:"Survey Registration Number which provided by /survey REST Api after calling it.",
    type:Number,
    required:true
  })
  @ApiResponse({ status: 200, description: 'You have successfully set answer for the given survey registration number.'})
  setResponse(@Body() responses: ResponseDTO,@Param('registrationNumber') registrationNumber:number): boolean | void {
    Logger.log(` POST   survey/response/${registrationNumber} `,"",true);
    logger.info(` POST   survey/response/${registrationNumber} `,"",true);
    return this.surveyService.getResponse(responses,registrationNumber);
  }
  @Get(':registrationNumber')
  @Header('Content-type','application/json')
  @ApiParam({
    name:"4 Digit Survey Registration Number",
    example:"2345",
    allowEmptyValue:false,
    description:"Survey Registration Number which provided by /survey REST Api after calling it.",
    type:Number,
    required:true
  })
  @ApiResponse({ status: 200, description: 'You can take the survey result from here.'})
  getSurvey(@Param('registrationNumber') registrationNumber:number): SurveyDTO {
    Logger.log(` GET   /survey/${registrationNumber} `,"",true);
    logger.info(` GET   /survey/${registrationNumber} `,"",true);
    let temp=this.surveyService.getSurvey(registrationNumber);
    return temp;
  }
  @Post('/reset')
  @Header('Content-type','application/json')
  @ApiResponse({ status: 200, description: 'Reset the server successfully.'})
  resetSurveyServer(): boolean | void {
    Logger.log(` POST   reset/ `,"",true);
    logger.warn(` POST   survey/ `,"",true);
    return this.surveyService.resetSurveyServer();
  }
}
