import { ConsoleLogger, Injectable, Scope, } from '@nestjs/common';
import { getFixturePath } from 'src/adapter/adapter.service';
const { promisify } = require('util')
const fastFolderSize = require('fast-folder-size')
const fastFolderSizeSync = require('fast-folder-size/sync')
const fs = require('fs');


@Injectable({ scope: Scope.TRANSIENT })
export class MonitoringService extends ConsoleLogger {

	startW() {
		this.log('Write is started!');
	}

	stopW() {
		this.log('Write is end');
	}


	async checkSize() {
		const fastFolderSizeAsync = promisify(fastFolderSize)
		const bytes = await fastFolderSizeAsync(getFixturePath)

		const folderSize = Math.floor(bytes / 1000000);
		if (folderSize > 10) {
			this.log('Size limit is exceeded')
		}
		else {
			this.log(`You have ${10 - folderSize}mb for download`);
		}
	}
}
