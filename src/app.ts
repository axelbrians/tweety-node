import server from './server';

const port = parseInt(process.env.PORT ?? "3000");

(function startServer() {
  new server().start(port)
  .then(port => console.log(`running on PORT ${port}`))
  .catch(err => {
    console.log(err)
  });
})();