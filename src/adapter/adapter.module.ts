import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { FileStorageService } from 'src/file_storage/file_storage.service';
import { MonitoringService } from 'src/monitoring/monitoring.service';
import { AdapterService } from './adapter.service';

@Module({
  providers: [AdapterService, FileStorageService, MonitoringService]
})
export class AdapterModule {
  configure
}
