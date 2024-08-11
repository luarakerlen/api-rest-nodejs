import fastify from 'fastify';
import { knex } from './database';
import { env } from './env';

const app = fastify();

app.get('/hello', async () => {
	const transaction = await knex('transactions')
		.select('*')
		.where('amount', 500);

	return transaction;
});

app
	.listen({
		port: env.PORT,
	})
	.then(() => {
		console.log('Server is running on port 3333');
	});
