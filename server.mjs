import Hapi from "@hapi/hapi";
import sequelize from "./databases.js";
import routeAuth from "./routes/auth.js";
import routeUser from "./routes/users.js";
import myPlugin from "./plugin/myPlugin.js"
import jwt from "hapi-auth-jwt2"

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  // Register the plugin with options
  await server.register({
    plugin: myPlugin,
    options: {
      logRequests: true,
    },
  });

  await sequelize.authenticate();
  console.log("Berhasil terkoneksi ke database MySQL");

  // Register the JWT authentication scheme
  await server.register(jwt);

  server.auth.strategy("jwt", "jwt", {
    key: "your-secret-key", // Replace with your actual JWT secret key
    validate: validateToken,
    verifyOptions: { algorithms: ["HS256"] },
  });

  server.route(routeAuth);
  server.route(routeUser);

  await server.start();
  console.log(`Server berjalan di ${server.info.uri}`);
};

const validateToken = async (decoded, request) => {
  // Implement your token validation logic here
  // Example: Check if the decoded token is valid
  if (decoded && decoded.userId) {
    return { isValid: true, credentials: decoded };
  } else {
    return { isValid: false };
  }
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init().catch((error) => {
  console.error("Error starting the server:", error);
  process.exit(1);
});