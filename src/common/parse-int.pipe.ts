import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const finalvalue = parseInt(value, 10);
    if (isNaN(finalvalue)) {
      throw new BadRequestException(`${value} is not an integer`);
    }
    return finalvalue;
  }
}
