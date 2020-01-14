import { IsNotEmpty,ArrayUnique,IsArray,ArrayNotEmpty} from 'class-validator';
export class  SurveyDTO{
  @IsNotEmpty()
  @ArrayUnique()
  @IsArray()
  @ArrayNotEmpty()
  questions: string[];
}