import { Module } from '@nestjs/common';
import { AdapterService } from 'src/adapter/adapter.service';
import { FileStorageService } from 'src/file_storage/file_storage.service';
import { MetaStorageService } from 'src/meta_storage/meta_storage.service';
import { MonitoringService } from 'src/monitoring/monitoring.service';
import { FsApiController } from './fs_api.controller';

@Module({
  controllers: [FsApiController],
  providers: [MetaStorageService, FileStorageService, AdapterService, MonitoringService]
})
export class FsApiModule { }
