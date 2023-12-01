import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "./_lib/BaseEntity";

@Entity({ tableName: "account" })
export class Account extends BaseEntity {
  @Property({ unique: true })
  emailAddress!: string;

  @Property({ type: "string" })
  password!: string;
}
