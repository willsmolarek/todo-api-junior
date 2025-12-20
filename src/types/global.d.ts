// src/types/global.d.ts
declare module 'express' {
  import * as express from 'express';
  export = express;
}

declare module 'cors' {
  import * as cors from 'cors';
  export = cors;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT: string;
    DATABASE_URL: string;
  }
}
