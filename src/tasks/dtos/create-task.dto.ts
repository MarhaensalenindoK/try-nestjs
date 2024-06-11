// validate dto task for content key
import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  content: string;
}
