import { ConsoleLogger, Injectable, Scope, } from '@nestjs/common';
import { getFixturePath } from 'src/adapter/adapter.service';
const fs = require('fs');

@Injectable({ scope: Scope.TRANSIENT })
export class MonitoringService extends ConsoleLogger {

	startW() {
		this.log('Write is started!');
	}

	stopW() {
		this.log('Write is end');
	}

	checkSize() {
		var size = 0;
		const files = fs.readDirSync(getFixturePath);
		for (let i = 0; i < files.length; i++) {
			size += fs.statSync(`.${files[i]}`).size;
		}
		console.log(size)
	}
}
