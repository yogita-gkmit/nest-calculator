import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateOperationDto {
	@IsEmail()
	email: string;

	@IsNotEmpty()
	operand1: number;

	@IsNotEmpty()
	operand2: number;

	@IsNotEmpty()
	operator: string;
}
