import { MigrationInterface, QueryRunner } from 'typeorm';

export class TaskInit1574708554648 implements MigrationInterface {
  name = 'TaskInit1574708554648';

  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE TABLE `tasks` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT now(6), `updated_at` timestamp(6) NOT NULL DEFAULT now(6), `name` varchar(120) NOT NULL, `description` text NOT NULL, `status` enum ('new', 'in progress', 'finished') NOT NULL DEFAULT 'new', PRIMARY KEY (`id`)) ENGINE=InnoDB",
      undefined
    );
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE `tasks`', undefined);
  }
}
