const http = require('http');

const server = http.createServer();

server.listen(3000, )

function * generate() {
  yield 1;
  yield 2;
  yield 3;
}

(() => {
  const gen = generate();
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
})();