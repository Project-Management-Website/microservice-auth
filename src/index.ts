import mongo from "./lib/mongoose.lib";
import { createGrpcServer, createServer } from "./server";
import * as dotenv from "dotenv"

async function init(): Promise<void> {
  try {
    dotenv.config()
        
    await mongo.connect();
    console.log('Connect to mongo')
    
    const port = process.env.APP_PORT || 3000;
    createServer().listen(port, () => {
      console.log(`Listening on port ${port}`);
    });

    const grpcPort = process.env.GRPC_PORT;
    createGrpcServer(grpcPort as string);
    
  } catch (err) {
    console.log('Connect failed');
    return;
  }
}

init();