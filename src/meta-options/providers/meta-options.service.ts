import { Injectable } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-metaoptions.dto';
import { Repository } from 'typeorm';
import { MetaOption } from '../meta-option.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaOptionsService {
    constructor(
        /**
         * Inject metaoptionsRepository
         */

        @InjectRepository(MetaOption)
        private readonly metaOptionsRepository: Repository<MetaOption>,
    ){}


    public async create(createPostMetaOptionsDto: CreatePostMetaOptionsDto){
        let metaOption = this.metaOptionsRepository.create(
            createPostMetaOptionsDto
        )
        return await this.metaOptionsRepository.save(metaOption);

    }
}
