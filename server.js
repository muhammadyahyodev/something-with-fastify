// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

fastify.get('/chris', async (request, reply) => {
    return { hello: 'chris' };
});

// Declare a dynamic route
fastify.get('/name/:name', async (request, reply) => {
    return { hello: request.params.name };
});

// Declare a post route
fastify.post('/dump', async (request, reply) => {
    return request.body;
});


// Start the server
const start = async () => {
    try {
      await fastify.listen(3000);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };

start();