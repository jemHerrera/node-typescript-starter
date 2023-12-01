import { Migration } from '@mikro-orm/migrations';

export class Migration20231130234009 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "account" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "email_address" varchar(255) not null, "password" varchar(255) not null, constraint "account_pkey" primary key ("id"));');
    this.addSql('alter table "account" add constraint "account_email_address_unique" unique ("email_address");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "account" cascade;');
  }

}
