const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/budget';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE categories(id SERIAL PRIMARY KEY, text VARCHAR(40) not null)');
query.on('end', () => { client.end(); });