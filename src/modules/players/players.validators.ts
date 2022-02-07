import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SetPlayerValidator {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNotEmpty({
    message: 'Number is not empty',
  })
  n: number;
}

export class DistributeValidator {
  @ApiProperty({
    required: false,
    type: Number,
  })
  times: number;
}
