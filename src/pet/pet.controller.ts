import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetDto } from './pet.dto';

@Controller('api/pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  getAll(): PetDto[] {
    return this.petService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): PetDto {
    return this.petService.findById(id);
  }

  @Post()
  create(@Body() petDto: PetDto): PetDto {
    return this.petService.create(petDto);
  }
}
