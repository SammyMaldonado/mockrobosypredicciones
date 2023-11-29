//En caso de que quiera utilizar ".env" en mi proyecto, activo dotenv.
import dotenv from 'dotenv';
import { Command } from 'commander';

const program = new Command();
program.option('-m, --mode <mode>', 'Modo de ejecución');
program.parse();

//dotenv.config() SÓLO LEE .env
dotenv.config({
  path: program.opts().mode === "prod" ? './.env.prod' : './.env.dev'
});

export default {
  PERSISTENCE: process.env.PERSISTENCE,
  app: {
    PORT: process.env.PORT || 8080,
    LOGGER_ENV: process.env.LOGGER_ENV || 'DEVELOPMENT'
  },
  mongo: {
    URL: process.env.MONGO_URL || 'localhost:27017',
    TEST: process.env.MONGO_URL_TEST || 'localhost:27017'
  },
  react: {
    FRONTBASEURL: process.env.VITE_FRONT_URL
  },
  axios: {
    AXIOSBASEURL: process.env.AXIOS_BASE_URL
  }
}