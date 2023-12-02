const Cupcake = require('../models/Cupcake');


const getAll = async (req, res) => {
	try {
    	const products = await Cupcake.find();

    	res.json(products);
  	} catch (error) {
    	res.status(500).json({ error: 'Erro ao obter lista de cupcakes!' });
  	}
};


const getById = async (req, res) => {
  	const productId = req.params.id;

  	try {
	    const product = await Cupcake.findById(productId);
    	
		if (!product) {
      		return res.status(404).json({ error: 'Cupcake não encontrado!' });
    	}

    	res.json(product);
  	} catch (error) {
    	res.status(500).json({ error: 'Erro ao obter produto por ID' });
  	}	
};


const getByKey = async (req, res) => {
  	const productKey = req.params.key;

  	try {
	    const product = await Cupcake.find({ key: productKey });
    	
		if (!product) {
      		return res.status(404).json({ error: 'Cupcake não encontrado!' });
    	}

    	res.json(product);
  	} catch (error) {
    	res.status(500).json({ error: 'Erro ao obter produto por ID' });
  	}	
};


const create = async (req, res) => {
  	const newItem = new Cupcake(req.body);

  	try {
    	const savedItem = await newItem.save();
		
    	res.json(savedItem);
  	} catch (error) {
	    res.status(500).json({ error: 'Erro ao salvar cupcake' });
  	}
};

// Função para atualizar um produto por ID
const update = async (req, res) => {
  	const itemId = req.params.id;

  	try {
    	const updatedItem = await Cupcake.findByIdAndUpdate(itemId, req.body, { new: true });
    	
		if (!updatedItem) {
      		return res.status(404).json({ error: 'Cupcake não encontrado' });
    	}

    	res.json(updatedItem);
  	} catch (error) {
	    res.status(500).json({ error: 'Erro ao atualizar cupcake' });
  	}
};

module.exports = {
  	getAll,
	getById,
	getByKey,
	create,
  	update,
};