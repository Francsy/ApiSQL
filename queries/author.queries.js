const db_queries_authors = {
    getAuthorsByEmail: `SELECT a.name, a.surname, a.email, a.image
    FROM authors AS a
    WHERE email = $1;`,
    getAllAuthors: `SELECT a.name, a.surname, a.email, a.image
    FROM authors AS a
    ORDER BY a.name;`,
    createAuthor:`INSERT INTO authors(name,surname,email,image) 
    VALUES ($1,$2,$3,$4);`,
    updateAuthor:`UPDATE authors
    SET name=$1, surname =$2, email =$3, image =$4
    WHERE email =$5;`,
    deleteAuthor:`DELETE FROM authors WHERE authors.email = $1;`
}

module.exports = db_queries_authors;