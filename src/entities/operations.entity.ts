import {
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	Entity,
} from 'typeorm';

@Entity()
export class Operation {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false })
	operand1: number;

	@Column({ nullable: false })
	operand2: number;

	@Column({ nullable: false })
	operator: string;

	@Column()
	result: number;

	@Column({ nullable: false })
	email: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
