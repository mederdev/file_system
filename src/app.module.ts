import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileStorageModule } from './file_storage/file_storage.module';
import { AdapterModule } from './adapter/adapter.module';
import { MetaStorageModule } from './meta_storage/meta_storage.module';
import { FsApiModule } from './fs_api/fs_api.module';
import { MulterModule } from '@nestjs/platform-express';
import { MonitoringModule } from './monitoring/monitoring.module';

@Module({
  imports: [MulterModule.register({ dest: './uploads', }), FileStorageModule, AdapterModule, MetaStorageModule, FsApiModule, MonitoringModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
