import { Body, Controller, Get, HttpStatus, Param, ParseFilePipe, Post, Put, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { editFileName } from 'src/file_storage/file_storage';
import { FileStorageService } from 'src/file_storage/file_storage.service';
import { FsApiService } from './fs_api.service';
import { AdapterService } from '../adapter/adapter.service';
import { FileDto } from './dto/fileDto';

@ApiTags('FileSystem API')
@Controller('fs-api')
export class FsApiController {
	constructor(private fileStorageService: FileStorageService, private fsApiService: FsApiService, private adapterService: AdapterService) { }

	@Put('/file')
	@UseInterceptors(FileInterceptor('file', {
		storage: diskStorage({
			destination: './uploads',
			filename: editFileName,
		})
	}))
	async uploadedFile(@UploadedFile() file: Express.Multer.File) {
		const res = await this.fsApiService.setMetaData(file);
		return {
			status: HttpStatus.OK,
			message: res,
		};
	}

	@Post('/file/write')
	async writeValue(@Body() dto: FileDto) {
		return this.adapterService.writeFile(dto.filename, dto.value);
	}

	@Get('/file/:filename')
	async getFile(@Param('filename') fileName, @Res() res) {
		const response = res.sendFile(fileName, { root: './uploads' });
		return {
			status: HttpStatus.OK,
			data: response,
		};
	}

	@Get('meta')
	async getMetaData() {
		return this.fsApiService.getMetaData();
	}

	@Get('/read/:filename')
	async readFileData(@Param('filename') fileName) {
		const res = await this.adapterService.readFile(fileName);
		return res;
	}

}
