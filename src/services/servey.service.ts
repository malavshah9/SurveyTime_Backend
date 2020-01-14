import { Injectable } from '@nestjs/common';
import { RandomGenerator } from '../utilities/random_generator';
import std = require("tstl");
import { SurveyDTO } from 'src/dto/survey.dto';
@Injectable()
export class SurveyService {
  surveyMap:std.HashMap<number,SurveyDTO>;
  constructor(private randromGenerator:RandomGenerator){
    this.surveyMap=new std.HashMap();
   }
  getSurveyNumber(): number {
    let randomNumber=this.randromGenerator.getRandom();
    this.surveyMap.set(randomNumber,new SurveyDTO());
    return randomNumber;
  }
  isValidSurveyNumber(registrationNumber:number): boolean{
    return this.surveyMap.has(registrationNumber);
  }
  setSurvey(registrationNumber:number,survey:SurveyDTO):boolean{
    if(this.isValidSurveyNumber(registrationNumber)){
      this.surveyMap.set(registrationNumber,survey);
      return true;
    }
    else{
      return false;
    }
  }
  getSurvey(registrationNumber:number):any{
    if(this.isValidSurveyNumber(registrationNumber))
    return this.surveyMap.get(registrationNumber);
    else
    return false;
  }
}
