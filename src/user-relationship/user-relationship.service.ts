import { Injectable } from '@nestjs/common';
import { CreateUserRelationshipDto } from './dto/create-user-relationship.dto';
import { UpdateUserRelationshipDto } from './dto/update-user-relationship.dto';

@Injectable()
export class UserRelationshipService {
  create(createUserRelationshipDto: CreateUserRelationshipDto) {
    return 'This action adds a new userRelationship';
  }

  findAll() {
    return `This action returns all userRelationship`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userRelationship`;
  }

  update(id: number, updateUserRelationshipDto: UpdateUserRelationshipDto) {
    return `This action updates a #${id} userRelationship`;
  }

  remove(id: number) {
    return `This action removes a #${id} userRelationship`;
  }
}
