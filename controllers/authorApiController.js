const author = require(__dirname + '/../models/author')


const getAuthors = async (req, res) => {
    let authors;
    if (req.query.email){
        authors = await author.getAuthorsByEmail(req.query.email);
    } else {
        authors = await author.getAllAuthors();
    }
    res.status(200).json(authors)
}

const createAuthor = async (req, res) => {
    const newAuthor = req.body; // {name,surname,email,image}
    const response = await author.createAuthor(newAuthor);
    res.status(201).json({
        message: `usuario creado: ${req.body.email}`,
        "items_created": response,
        data: newAuthor
    });
}

const updateAuthor = async (req, res) => {
    const { email } = req.params;
    const newData = req.body; // {name, surname, newEmail, image}
    const response = await author.updateAuthor(email, newData);
    res.status(200).json({
        message: `actualizaado: ${req.body.email}`,
        "entry_updated": response,
        data: newData
    })
}

const deleteAuthor = async (req, res) => {
    const delAuthor = req.body; // {email}
    const response = await author.deleteAuthor(delAuthor);
    res.status(201).json({
        "message": `Se ha borrado ${delAuthor.email}`,
        "entry_deleted": response,
        data: delAuthor
    });
}


module.exports = {
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor
}