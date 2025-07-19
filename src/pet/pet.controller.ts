
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetDto } from './pet.dto';
import { ApiTagsPets, ApiGetAllPetsDoc, ApiGetPetByIdDoc, ApiCreatePetDoc } from './pet.controller.doc';

@ApiTagsPets
@Controller('api/pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  @ApiGetAllPetsDoc()
  getAll(): PetDto[] {
    return this.petService.findAll();
  }

  @Get(':id')
  @ApiGetPetByIdDoc()
  getById(@Param('id') id: string): PetDto {
    return this.petService.findById(id);
  }

  @Post()
  @ApiCreatePetDoc()
  create(@Body() petDto: PetDto): PetDto {
    return this.petService.create(petDto);
  }
}
