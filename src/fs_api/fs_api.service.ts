import { Injectable } from '@nestjs/common';
import { setNewValue, getMeta } from './fs_api.repoitory';

@Injectable()
export class FsApiService {
	async setMetaData(file: Express.Multer.File) {
		return setNewValue(file);
	}

	async getMetaData() {
		return getMeta();
	}
}
