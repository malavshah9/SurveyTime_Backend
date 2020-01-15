import { IsNotEmpty,ArrayUnique,IsArray,ArrayNotEmpty,IsNumber, IsOptional, IsString, ValidateNested} from 'class-validator';
import { isNumber } from 'util';
import { QuestionDTO } from './question.dto';
export class  SurveyDTO{
  @IsNotEmpty()
  @ArrayUnique()
  @IsArray()
  @ArrayNotEmpty()
  // @ValidateNested()
  questions:QuestionDTO[];
  constructor(noQuestions:number){
    this.questions=new QuestionDTO[noQuestions];
    for(let index=0;index<this.questions.length;index++){
      this.questions[index]=new QuestionDTO();
    }
  }
}