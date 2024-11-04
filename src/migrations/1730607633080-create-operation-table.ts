import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateOperationTable1730607633080 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "operation" (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        operand1 INT NOT NULL,
        operand2 INT NOT NULL,
        result INT,
        operator VARCHAR(30) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "operation"`);
  }
}
