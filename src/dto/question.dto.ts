import { IsNotEmpty,ArrayUnique,IsArray,ArrayNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';
import { isUndefined, isNumber } from 'util';
import { ApiProperty } from '@nestjs/swagger';
export class  QuestionDTO{
  // @IsNotEmpty()
  // @ArrayUnique()
  // @IsArray()
  // @ArrayNotEmpty()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:"Question string which you want to add to survey",
    default:"Are you student?",
    type: String,
    required:true,
    example:"Do you code daily?"
  })
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