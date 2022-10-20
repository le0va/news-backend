const client = require('../mongo');

const getNews = async (req, res, next) => {
    await client.connect();
    const db = client.db();
    const fetchedNews = await db.collection('news').find().project({ id: 1, title: 1, date: 1, image1: 1, alt: 1 }).toArray();
    await client.close();

    res.status(200).json({ news: fetchedNews });
}

const getNewById = async (req, res, next) => {
    const newId = req.params.nid;

    await client.connect();
    const db = client.db();
    const fetchedNew = await db.collection('news').findOne({ id: newId });
    await client.close();

    res.status(200).json({ new: fetchedNew });
}

const createNew = async (req, res, next) => {
    await client.connect();
    const db = client.db();
    const documentsNumber = await db.collection('news').countDocuments();

    const { title, description, author, image1, image2 } = req.body;
    const createdNew = {
        id: `n${documentsNumber + 1}`,
        title,
        articles: Array.isArray(description) ? description : [description],
        author,
        image1,
        image2,
        alt: 'alt',
        date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    }
    await db.collection('news').insertOne(createdNew);
    await client.close();

    res.status(200).json({ createdNew });
}

exports.getNews = getNews;
exports.getNewById = getNewById;
exports.createNew = createNew;