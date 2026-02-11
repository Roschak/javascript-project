import express from 'express';
import routes from './routes.js';

const app = express();
const port = 5000; // Ubah dari 3000 ke 5000
const host = 'localhost';

app.use(express.json());
app.use('/', routes);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});