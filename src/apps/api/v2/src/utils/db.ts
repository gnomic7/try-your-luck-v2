import { MongoClient } from 'mongodb';

const mongoURI = process.env.MONGO_URL || 'mongodb://localhost:27017';
const mongoDB = process.env.MONGO_DB || 'try-your-luck';
const mongoClient = new MongoClient(mongoURI);
const getCollection = async (name: string) => {
  try {
    await mongoClient.connect();
    return mongoClient.db(mongoDB).collection(name);
  } catch (error) {
    console.log(error);
    mongoClient.close();
    throw new Error('Unable to establish connection to mongodb!');
  } finally {
    console.log('Connected to Mongoclient');
  }
};

export default getCollection;
