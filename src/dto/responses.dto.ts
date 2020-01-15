import { IsNotEmpty,ArrayUnique,IsArray,ArrayNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';
export class ResponseDTO{
    @IsArray()
    @IsNotEmpty()
    @ArrayNotEmpty()
    responses:boolean[];
}
