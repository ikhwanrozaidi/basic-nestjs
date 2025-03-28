import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { Tag } from '../tag.entity';

@Injectable()
export class TagsService {

    constructor(
        /**
         * Inject Repository
         */

        @InjectRepository(Tag)
        private readonly tagsRepository: Repository<Tag>,
    ){}

    public async create (createTagDto: CreateTagDto){
        let tag = this.tagsRepository.create(createTagDto);

        return await this.tagsRepository.save(tag);
    }

    public async findMultipleTags(tags: number[]){
        let results = await this.tagsRepository.find({
            where: {
                id: In(tags)
            }
        })

        return results;
    }

    public async delete(id: number) {
        await this.tagsRepository.delete(id);
    
        return {
          deleted: true,
          id,
        };
      }

    public async softRemove(id: number) {
    await this.tagsRepository.softDelete(id);

    return {
        softDeleted: true,
        id,
    };
    }


}
