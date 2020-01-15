import { Injectable } from '@nestjs/common';
import { RandomGenerator } from '../utilities/random_generator';
import std = require("tstl");
import { ResponseDTO } from '../dto/responses.dto';
import { QuestionDTO } from '../dto/question.dto';
@Injectable()
export class SurveyService {
  // surveyMap:std.HashMap<number,SurveyDTO>;
  surveyMap:Map<number,QuestionDTO[]>;
  constructor(private randromGenerator:RandomGenerator){
    // this.surveyMap=new std.HashMap<number,SurveyDTO>();
    this.surveyMap=new Map<number,QuestionDTO[]>();
   }
  getSurveyNumber(): number {
    let randomNumber=this.randromGenerator.getRandom();
    this.surveyMap.set(randomNumber,[]);
    return randomNumber;
  }
  isValidSurveyNumber(registrationNumber:number): boolean{
    return this.surveyMap.has(registrationNumber);
  }
  setSurvey(registrationNumber:number,survey:QuestionDTO[]):boolean{
    registrationNumber=parseInt(registrationNumber+"");
    if(this.isValidSurveyNumber(registrationNumber)){
      this.surveyMap.set(registrationNumber,survey);
      return true;
    }
    else{
      return false;
    }
  }
  getSurvey(registrationNumber:number):any{
    registrationNumber=parseInt(registrationNumber+"");
    if(this.isValidSurveyNumber(registrationNumber))
    return this.surveyMap.get(registrationNumber);
    else
    return false;
  }
  getResponse(responses:ResponseDTO,registrationNumber:number):boolean | void{
    registrationNumber=parseInt(registrationNumber+"");
    if(this.isValidSurveyNumber(registrationNumber)){
      let temp:QuestionDTO[] = this.surveyMap.get(registrationNumber);
      if(temp.length===responses.responses.length){
        let index=0;
        responses.responses.forEach(res => { 
        if(!(temp[index] instanceof QuestionDTO)){
          let tempQuestionDto=new QuestionDTO();
          tempQuestionDto.question=temp[index].question;
          temp[index]=tempQuestionDto;
        }
          if(res){
            temp[index].increaseTrueCount();
          }
          else{
            temp[index].increaseFalseCount();
          }
          index++;
        });
        return true;
      }
      else{
        return false;
      }
    }
    else
    return false;
  }
  resetSurveyServer():boolean{
    this.surveyMap.clear();
    if(this.surveyMap.size===0)
    return true;
    else
    return false;
  }
}
