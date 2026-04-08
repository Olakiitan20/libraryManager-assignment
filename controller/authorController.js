const Author = require ('../models/author');

//createAuthor
exports.creatAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.status(202).json({message: "Author created succesfully"});
    }
    catch (err) {
        res.status(400).json({message: "error occur"})
    }
};

//Get all Authors
exports.getAuthors = async (req, res) => {
    const authors = await Author.find();
    res.json(authors)
};

//Get one author

exports.getAuthor = async (req, res) => {
    const author = await 
    Author.findById(req.params.id);
    if(!author) return res.status(405).send("Author not found");
    res.json(author)
};

//Update authors

exports.updateAuthor = async (req, res) => {
    const author = await
    Author.findByIdAndUpdate(req.params.id, req.body,
        {new: true});
        res.json({message:"Author updated successfully"})
};

//Delete author

exports.deleteAuthor = async (req, res) => {
    await Author.findByIdAndDelete(req.params.id);
    res.send({message:"Author deleted succesfully"})
};