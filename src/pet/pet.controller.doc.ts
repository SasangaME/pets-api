import { applyDecorators } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { PetDtoDoc } from './pet.dto.doc';

export function ApiGetAllPetsDoc() {
  return applyDecorators(
    ApiOperation({ summary: 'Get all pets' }),
    ApiResponse({
      status: 200,
      description: 'List of pets',
      type: [PetDtoDoc],
      schema: {
        example: [
          {
            id: '1',
            name: 'Fluffy',
            color: 'brown',
            gender: 'male',
            age: 3
          },
          {
            id: '2',
            name: 'Mittens',
            color: 'black',
            gender: 'female',
            age: 2
          }
        ]
      }
    })
  );
}
export function ApiGetPetByIdDoc() {
  return applyDecorators(
    ApiOperation({ summary: 'Get pet by ID' }),
    ApiParam({ name: 'id', description: 'Pet ID' }),
    ApiResponse({
      status: 200,
      description: 'The found pet',
      type: PetDtoDoc,
      schema: {
        example: {
          id: '1',
          name: 'Fluffy',
          color: 'brown',
          gender: 'male',
          age: 3
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Pet not found',
      schema: {
        example: { statusCode: 404, message: 'Pet not found', error: 'Not Found' }
      }
    })
  );
}
export function ApiCreatePetDoc() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a new pet' }),
    ApiBody({
      type: PetDtoDoc,
      examples: {
        default: {
          summary: 'Example request',
          value: {
            name: 'Fluffy',
            color: 'brown',
            gender: 'male',
            age: 3
          }
        }
      }
    }),
    ApiResponse({
      status: 201,
      description: 'The created pet',
      type: PetDtoDoc,
      schema: {
        example: {
          id: '1',
          name: 'Fluffy',
          color: 'brown',
          gender: 'male',
          age: 3
        }
      }
    })
  );
}
export const ApiTagsPets = ApiTags('pets');
