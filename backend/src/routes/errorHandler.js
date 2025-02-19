export const notFoundRequest = (req, res) => {
    res.status(404).json({ error: "Rota não identificada" });
}

export const errorHandler = (err,req, res, next) => {
    console.log(err);
    res.status(500).json({ error: "Ocorreu um erro" });
}