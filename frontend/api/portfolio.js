import { MongoClient } from 'mongodb';

const uri = "mongodb://mongo:kthwhon83ljdxlpt@host.airporttaxis.lk:27017/?authSource=admin&directConnection=true";
let client;
let clientPromise;

if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db('seranex');
        const collection = db.collection('portfolio');

        if (req.method === 'GET') {
            const items = await collection.find({}).toArray();
            return res.status(200).json(items);
        } else if (req.method === 'POST') {
            const newItem = req.body;
            newItem.id = Date.now().toString();
            await collection.insertOne(newItem);
            return res.status(201).json({ success: true, item: newItem });
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(452).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Database connection failed' });
    }
}
