import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';
import { UserEntity } from './app.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppRepo {
  private db: Pool;
  constructor() {
    this.db = new Pool({
      user: 'debbiecheng',
      host: 'localhost',
      database: 'story-map-backend',
      password: '',
      port: 5432,
    });
  }

  async getUser(username: string): Promise<UserEntity | undefined> {
    return this.db
      .query({
        text: 'SELECT * from users where username = $1::text',
        values: [username],
      })
      .then((result: QueryResult<UserEntity>) => {
        if (result.rowCount == 0) {
          return undefined;
        } else if (result.rowCount == 1) {
          return result.rows[0];
        }
        throw new Error(`More than 1 user in DB from username: ${username}`);
      });
  }

  async createUser(
    username: string,
    email: string,
    password: string,
  ): Promise<UserEntity | undefined> {
    const hashedPassword = await encrypt(password);
    return this.db
      .query({
        text:
          'INSERT INTO users(username, email, password) VALUES(lower($1), lower($2), $3) RETURNING uid',
        values: [username, email, hashedPassword],
      })
      .then((result) => {
        if (result.rowCount == 1) {
          return result.rows[0];
        }
        throw new Error('Database error');
      })
      .catch((err) => {
        if (/username/.test(err.detail)) {
          throw new HttpException('Duplicate username', HttpStatus.CONFLICT);
        }
        if (/email/.test(err.detail)) {
          throw new HttpException('Duplicate email', HttpStatus.CONFLICT);
        }
      });
  }

  async matchUser(username: string): Promise<any> {
    return this.db
      .query({
        text: 'SELECT username, password from users where username = $1::text',
        values: [username],
      })
      .then((result) => {
        if (result.rowCount == 1) {
          return result.rows[0];
        }
      })
      .catch((err) => console.log(err));
  }
}

async function encrypt(password: string): Promise<string> {
  const saltRounds = 10;
  return await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        reject(err);
      }
      resolve(hash);
    });
  });
}
