const Book = require ('../models/books');

//createBook
exports.createBook = async (req, res) => {
    try { const {title, isbn} = req.body;
    //validation
    if (!title || !isbn){
        return res.status(400).json({message: "Field required"});
    }
        const book = await Book.create({title, isbn, author});
        res.status(202).json({message: "Book created succesfully"});
    }
    catch (err) {
        res.status(400).json({message: "error occur"});
    }
};

//Get all Books

exports.getAllBooks = async (req, res) => {
    const books = await
    Book.find().populate("author, title");
    res.json(books)
};

//Get one book

exports.getBook = async (req, res) => {
    const book = await 
    Book.findById(req.params.id).populate("author, title");
    if(!book) return
    res.status(405).send("Book not found");
    res.json(book)
};

//Update books

exports.updateBook = async (req, res) => {
    const book = await
    Book.findByIdAndUpdate(req.params.id, req.body,
        {new: true});
        res.json({message:"Book updated successfully"})
};

//Delete book

exports.deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.send({message:"Book deleted succesfully"})
};

exports.borrowBook = async (req, res) => {
    try{
        const {studentId, attendantId, returnDate} = req.body;

        const book = await Book.findById(req.params.id)

        //validation

        if(!book){
             return res.status(400).json({message: "Book not found"})
        }

        if(book.status === "OUT"){
            return res.status(400).json({message: "Book is already out"})
        };

        // Update
        book.status = "OUT";
        book.borrowBY = studentId;
        book.issuedBy = attendantId;
        book.returnDate = returnDate;

        await book.save();

        return res.status(200).json(book)
    }
    catch(err)
    {
        return res.status(500).json({message: "An error occur, please try again."})
    }
};

exports.returnBook = async (req, res) => {
    try {const {id} = req.params;
        const book = await Book.findById(id);
        
        //validation

        if(!book) {return res.status(400).json({message: "Book not found"})
        }
        if(book.Status === "IN"){
            return res.status(400).json({message:"Book is not borrowed"})
        };

    //update
      book.Status = "IN",
      book.borrowBY = null,
      book.issuedBy = null,
      book.returnDate = null,


      await book.save();
      return res.status(200).json(book)

}   
catch(err)
    {
        return res.status(500).json({message: "An error occur, please try again."})
    }
};