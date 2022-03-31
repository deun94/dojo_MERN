// const { application } = require("express");
const Author = require("../models/author.model");

// module.exports.hellWorld = (req, res) => {
//     res.json({msg:"helloworld"})
// }


module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json({ results: allAuthors }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor => res.json({ results: oneAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({ results: newAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ results: updatedAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ results: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
