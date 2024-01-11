import { fastify } from 'fastify';
import pino from 'pino';
import dotenv from 'dotenv';
import blogRoutes from './routes/blog-routes';
import db from './config/index';

dotenv.config();

const port = process.env.PORT || 7000;
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/fastify';

const server = fastify({
    logger: pino({ level: 'info' })
});

// Activate plugins below:
server.register(db, { uri });
server.register(blogRoutes);

const start = async () => {
  try {
      await server.listen(port, () => {
        console.log(`\nServer has been started on ${port} port...`)
      });
  } catch (err) {
      server.log.error(err);
      process.exit(1);
  }
};

start();