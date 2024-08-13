import { Knex } from "knex";

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string;
      title: string;
      amount: number;
      created_at: string;
      section_id?: string;
    }
  }
}