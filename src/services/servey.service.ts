import { Injectable } from '@nestjs/common';
import { RandomGenerator } from '../utilities/random_generator';
@Injectable()
export class SurveyService {
  constructor(private randromGenerator:RandomGenerator){ }
  getSurveyNumber(): number {
    return this.randromGenerator.getRandom();
  }
}
