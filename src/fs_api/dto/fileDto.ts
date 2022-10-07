import { ApiProperty } from '@nestjs/swagger';

export class FileDto {
	@ApiProperty()
	filename: string;

	@ApiProperty()
	value: string;

}