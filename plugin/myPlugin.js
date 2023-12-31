const myPlugin = {
    name: 'my-plugin',
    version: '1.0.0',
    register: (server, options) => {
      if (options.logRequests) {
        // Log incoming request information
        server.ext('onRequest', (request, h) => {
          console.log(`Incoming request: ${request.method.toUpperCase()} ${request.path}`);
          return h.response();
        });
      }
  
      // Log response information
      server.ext('onPreResponse', (request, h) => {
        const response = request.response;
        console.log(`Outgoing response: ${response.statusCode}`);
        return h.response().code(200);
      });
    },
  };
  
 export default myPlugin; // Remove this line
  