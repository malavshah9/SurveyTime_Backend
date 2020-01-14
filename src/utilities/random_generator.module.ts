import { Module } from '@nestjs/common';
import { RandomGenerator } from './random_generator';
@Module({
    imports: [],
    controllers:[],
    providers:[RandomGenerator],
    exports:[
        RandomGenerator
    ]
})
export class RandomGeneratorModule{

}