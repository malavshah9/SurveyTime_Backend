import { IsNotEmpty,ArrayUnique,IsArray,ArrayNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class ResponseDTO{
    @IsArray()
    @IsNotEmpty()
    @ArrayNotEmpty()
    @ApiProperty({
        description:"Reponse to survey. The number of response should be equal to number of questions provided in survey registration number. The length of boolean array should be equal to number of responses.",
        default:[],
        type: [Boolean],
        required:true,
        example:[true,false,true,false,true]
    })
    responses:boolean[];
}
