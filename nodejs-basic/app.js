import http from 'http';
const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
const port = 3000;
const firstName = process.argv[2];
const lastName = process.argv[3];
const memoryInformation = process.memoryUsage();
const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
};
const server = http.createServer(requestHandler);
server.listen(port, hostname, () => {
  console.log(`Server berjalan pada http://${hostname}:${port}/`);
  console.log(memoryInformation);
});


