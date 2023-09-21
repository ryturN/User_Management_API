import Hapi from "@hapi/hapi";
import sequelize from "./databases.js";
import routeAuth from "./routes/auth.js";
import routeUser from "./routes/users.js";
import myPlugin from "./plugin/myPlugin.js"
import jwt from "hapi-auth-jwt2"

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
  });

  // Register the plugin with options
  await server.register({
    plugin: myPlugin,
    options: {
      logRequests: false, // Example option: Log incoming requests
    },
  });

  await sequelize.authenticate();
  console.log("Berhasil terkoneksi ke database MySQL");
  //   await sequelize.sync();

  // await server.register(import("hapi-auth-jwt2"));
await server.register(jwt);

  server.auth.strategy("jwt", "jwt", {
    key: import("./config/auth.mjs").secretKey,
    validate: validateToken,
    verifyOptions: { algorithms: ["HS256"] },
  });

  server.route(routeAuth);

  server.route(routeUser);
  server.start();

  await console.log(`Server berjalan di ${server.info.uri}`);
};

const validateToken = async (decoded, request) => {
  return { isValid: true, credentials: decoded };
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init().catch((error) => {
  console.error("Error starting the server:", error);
  process.exit(1);
});
