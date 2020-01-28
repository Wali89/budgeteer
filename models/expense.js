const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/budget';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE expenses(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, date DATE NOT NULL DEFAULT CURRENT_DATE, category_id INT NOT NULL REFRENCES category (id))');
query.on('end', () => { client.end(); });