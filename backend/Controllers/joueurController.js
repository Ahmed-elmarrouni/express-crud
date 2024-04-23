const asyncHandler = require("express-async-handler");

// Route   GET/api/joueurs
const getJoueurs = asyncHandler(async (req, res) => {
    res.status(200).json({ message: ` joueurs` });
})

// Route   POST/api/joueurs
const createJoueurs = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Pls add a txt field")
    }
    res.status(200).json({ message: "Create joueurs" });
})

// Route   PUT/api/joueurs/id
const updateJoueurs = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update joueurs ${req.params.id}` });
})

// Route   DELETE/api/joueurs/id
const deleteJoueurs = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Deleted joueur with ID ${req.params.id}` });
})


module.exports = {
    getJoueurs,
    createJoueurs,
    updateJoueurs,
    deleteJoueurs,
}