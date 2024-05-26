const Carro = require("../models/carro");

// Criar um novo carro (Create)
exports.createCarro = async (req, res) => {
  const { marca, modelo, ano, preco } = req.body;
  const carro = new Carro({ marca, modelo, ano, preco });

  try {
    const savedCarro = await carro.save();
    res.status(201).json(savedCarro);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Obter todos os carros (Read)
exports.getCarros = async (req, res) => {
  try {
    const carros = await Carro.find();
    res.json(carros);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obter um carro pelo ID (Read)
exports.getCarroById = async (req, res) => {
  try {
    const carro = await Carro.findById(req.params.id);
    if (!carro) return res.status(404).json({ message: 'Carro não encontrado' });
    res.json(carro);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Atualizar um carro pelo ID (Update)
exports.updateCarro = async (req, res) => {
  const { marca, modelo, ano, preco } = req.body;

  try {
    const carro = await Carro.findByIdAndUpdate(
      req.params.id,
      { marca, modelo, ano, preco },
      { new: true }
    );

    if (!carro) return res.status(404).json({ message: 'Carro não encontrado' });

    res.json(carro);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Deletar um carro pelo ID (Delete)
exports.deleteCarro = async (req, res) => {
  try {
    const carro = await Carro.findByIdAndDelete(req.params.id);

    if (!carro) return res.status(404).json({ message: 'Carro não encontrado' });

    res.json({ message: 'Carro deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
