import { Module } from '@nestjs/common';
import { AdapterService } from 'src/adapter/adapter.service';
import { MonitoringService } from 'src/monitoring/monitoring.service';
import { FileStorageService } from './file_storage.service';

@Module({
	providers: [FileStorageService, AdapterService, MonitoringService]
})
export class FileStorageModule {

}
