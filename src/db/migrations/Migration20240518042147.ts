import { Migration } from '@mikro-orm/migrations';

export class Migration20240518042147 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "account" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, "email_verified" boolean not null default false, "is_admin" boolean not null default false, constraint "account_pkey" primary key ("id"));');
    this.addSql('alter table "account" add constraint "account_username_unique" unique ("username");');
    this.addSql('alter table "account" add constraint "account_email_unique" unique ("email");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "account" cascade;');
  }

}
