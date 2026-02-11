import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();
const port = 3000;
const host = 'localhost';

// Middleware agar client bisa akses (CORS)
app.use(cors({
  origin: '*'
}));
// Middleware agar bisa baca JSON body
app.use(express.json());

// Menggunakan routing
app.use('/', routes);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});