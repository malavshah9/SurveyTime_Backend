import { IsNotEmpty,IsString } from 'class-validator';

export class QuestionDTO {
  @IsNotEmpty()
  @IsString()
  question: string;
}