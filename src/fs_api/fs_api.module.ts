import { Module } from '@nestjs/common';
import { AdapterService } from 'src/adapter/adapter.service';
import { FileStorageService } from 'src/file_storage/file_storage.service';
import { MonitoringService } from 'src/monitoring/monitoring.service';
import { FsApiController } from './fs_api.controller';
import { FsApiService } from './fs_api.service';

@Module({
  controllers: [FsApiController],
  providers: [FsApiService, FileStorageService, AdapterService, MonitoringService]
})
export class FsApiModule { }
