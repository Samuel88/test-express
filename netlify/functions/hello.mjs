import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient('mongodb+srv://netlify:netlify@cluster0.gcoid.mongodb.net/');


export default async (req, context) => {
    const connection = await mongoClient.connect();
    const database = connection.db('sample_mflix');
    const collection = database.collection('movies');
    const results = await collection.find({}).limit(40).toArray();
    return Response.json(results);
}

export const config = {
    path: '/test'
}