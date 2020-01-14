import { Module } from '@nestjs/common';
@Module({
    
})
export class RandomGenerator{
    constructor(){}
    getRandom(): number{
        return Math.floor(1000 + Math.random() * 9000);
    }
}