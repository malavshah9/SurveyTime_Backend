import { IsNotEmpty,ArrayUnique,IsArray,ArrayNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';
import { isUndefined, isNumber } from 'util';
export class  QuestionDTO{
  // @IsNotEmpty()
  // @ArrayUnique()
  // @IsArray()
  // @ArrayNotEmpty()
  @IsString()
  @IsNotEmpty()
  question: string;
  @IsNumber()
  @IsOptional()
  trueCount:number=0;
  @IsNumber()
  @IsOptional()
  falseCount:number=0;
  constructor(){
    this.trueCount=0;
    this.falseCount=0;
  }
  increaseTrueCount(){
    if(isNaN(this.trueCount) || isUndefined(this.trueCount) || !isNumber(this.trueCount)){
      this.trueCount=0;
    }
    this.trueCount++;
  }
  increaseFalseCount(){
    if(isNaN(this.falseCount) || isUndefined(this.falseCount) || !isNumber(this.falseCount)){
      this.falseCount=0;
    }
    this.falseCount++;
  }
}