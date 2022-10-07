import { Module } from '@nestjs/common';
import { MetaStorageService } from './meta_storage.service';

@Module({
  providers: [MetaStorageService]
})
export class MetaStorageModule {}
