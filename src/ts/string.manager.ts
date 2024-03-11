import { join, reverse, split } from './decorators/string.decorator';

export class StringManager {
  @split
  @reverse
  @join('.')
  reverse(input: string): void {
    console.log(input);
  }
};