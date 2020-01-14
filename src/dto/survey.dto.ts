import { IsNotEmpty,ArrayUnique,IsArray,ArrayNotEmpty } from 'class-validator';
import { QuestionDTO } from './question.dto';
export class  SurveyDTO{
  @IsNotEmpty()
  @ArrayUnique()
  @IsArray()
  @ArrayNotEmpty()
  questions: string[];
}