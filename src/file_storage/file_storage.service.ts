import { Injectable } from '@nestjs/common';
const fs = require('fs');

@Injectable()
export class FileStorageService {
	async saveFileToLocal(Fpath: string) {
		fs.writeFile(`/home/mederdev/StudioProjects/FileSystem/fs_project/uploads/${Fpath}.txt`, 'Тише, мыши, кот на крыше', function (error) {
			if (error) throw error; // ошибка чтения файла, если есть
			console.log('Данные успешно записаны записать файл');
		});
	}

	async writeFileToLocal(filePath: string, value: string) {
		const res = fs.createWriteStream(filePath);
		res.write(value);
		res.on('end', () => {
			return 'Write is end';
		})
	}

	async readFileFromLocal(filePath: string) {
		const res = fs.createReadStream(filePath);
		var resMessage = '';
		for await (const chunk of res) {
			resMessage = resMessage.concat(chunk.toString());
		}
		return resMessage;
	}
}
