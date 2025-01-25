import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGO_URI;
const dbName = process.env.DATABASE_NAME;

let dbClient;

export const connectDB = async () => {
  if (dbClient) return dbClient;

  try {
    const client = new MongoClient(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    console.log('✅ Connesso a MongoDB su Azure Cosmos DB');
    dbClient = client.db(dbName);

    return dbClient;
  } catch (error) {
    console.error('❌ Errore di connessione a MongoDB:', error);
    process.exit(1);
  }
};

export const closeDB = async () => {
  if (dbClient) {
    await dbClient.close();
    console.log('🔒 Connessione a MongoDB chiusa.');
  }
};
