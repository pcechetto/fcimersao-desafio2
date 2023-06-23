import { Controller, Get, Post, Body } from '@nestjs/common';
//import { Asset } from '.../prisma/assets.model';
import { Asset } from '@prisma/client';

@Controller('api/assets')
export class AssetsController {
  private assets: Asset[] = [];

  @Get()
  getAssets(): Asset[] {
    return this.assets;
  }

  @Post()
  createAsset(@Body() asset: Asset): Asset {
    this.assets.push(asset);
    return asset;
  }
}
