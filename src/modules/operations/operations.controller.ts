import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Headers,
  BadRequestException,
} from '@nestjs/common';
import { OperationsService } from './operations.service';
import { CreateOperationDto } from './dto/create-operation.dto';

@Controller('operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @Post()
  async create(
    @Body() createOperationDto: CreateOperationDto,
    @Headers('email') email: string,
  ) {
    if (!email)
      throw new BadRequestException('Email does not exist in Headers');
    return this.operationsService.create(createOperationDto);
  }

  @Get()
  async findAll(@Headers('email') email: string) {
    if (!email)
      throw new BadRequestException('Email does not exist in Headers');
    return this.operationsService.findAll(email);
  }

  @Delete(':id')
  async removeOne(@Param('id') id: string) {
    return this.operationsService.removeOne(Number(id));
  }

  @Delete()
  async remove(@Headers('email') email: string) {
    if (!email)
      throw new BadRequestException('Email does not exist in Headers');
    return this.operationsService.remove(email);
  }
}
