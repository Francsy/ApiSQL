const entry = require('../models/entries'); // Importar el modelo de la BBDD


const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

const updateEntry = async (req, res) => {
    const { title } = req.params;
    const newEntry = req.body; // {newTitle, content, category}
    const response = await entry.updateEntry(title, newEntry);
    res.status(200).json({
        "entry_updated": response,
        data: newEntry
    })
}

const deleteEntry = async (req, res) => {
    const delEntry = req.body; // {title}
    const response = await entry.deleteEntry(delEntry);
    res.status(201).json({
        "message": `Se ha borrado la entry ${req.body.title}`,
        "entry_deleted": response,
        data: delEntry
    });
}

module.exports = {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry
}