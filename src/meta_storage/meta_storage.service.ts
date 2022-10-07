import { Injectable } from '@nestjs/common';
import { setNewValue, getMeta } from 'src/fs_api/fs_api.repoitory';

@Injectable()
export class MetaStorageService {
	async setMetaData(file: Express.Multer.File) {
		return setNewValue(file);
	}

	async getMetaData() {
		return getMeta();
	}
}
