import { Injectable } from '@nestjs/common';
import { FileStorageService } from 'src/file_storage/file_storage.service';
import { MonitoringService } from 'src/monitoring/monitoring.service';
const path = require('path');
export const getFixturePath = path.join('/home/mederdev/StudioProjects/FileSystem/fs_project', 'uploads',);

@Injectable()
export class AdapterService {
	constructor(private myLogger: MonitoringService, private fileStorageService: FileStorageService) { };

	async saveFile(Fpath: string) {

	}

	async readFile(Fpath: string) {
		const localPath = path.join(getFixturePath, Fpath);
		const res = this.fileStorageService.readFileFromLocal(localPath);
		return res;
	}

	async writeFile(filename: string, value: string) {
		this.myLogger.startW();
		const localPath = path.join(getFixturePath, filename);
		const res = this.fileStorageService.writeFileToLocal(localPath, value);
		this.myLogger.stopW();
		return res;
	}
}
