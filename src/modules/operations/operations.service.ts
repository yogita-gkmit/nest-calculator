import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateOperationDto } from './dto/create-operation.dto';
import { Operation } from '../../entities/operations.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OperationsService {
  constructor(
    @InjectRepository(Operation)
    private readonly operationsRepository: Repository<Operation>,
  ) {}
  async create(createOperationDto: CreateOperationDto) {
    const { operand2, operand1, operator, email } = createOperationDto;
    let result;
    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        if (operand2 === 0) {
          throw new BadRequestException('Denominator must not be zero');
        }
        result = operand1 / operand2;
        break;
      default:
        throw new BadRequestException('Operator is not valid');
    }

    const newOperation = this.operationsRepository.create({
      operator,
      operand1,
      operand2,
      result,
      email,
    });

    return await this.operationsRepository.save(newOperation);
  }

  async findAll(email: string) {
    return await this.operationsRepository.find({ where: { email } });
  }

  async removeOne(id: number) {
    const record = await this.operationsRepository.delete(id);
    if (record.affected === 0) {
      throw new BadRequestException('No record found');
    }

    return { message: 'Operation on the basis of id is deleted' };
  }

  async remove(email: string) {
    await this.operationsRepository.delete(email);
    return {
      message: `This action removes all operation performed by the user`,
    };
  }
}
