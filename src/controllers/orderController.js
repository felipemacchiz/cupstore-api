const Order = require('../models/Order');


const getAll = async (req, res) => {
	try {
    	const orders = await Order.find();

    	res.json(orders);
  	} catch (error) {
    	res.status(500).json({ error: 'Erro ao obter lista de pedidos!' });
  	}
};


const getById = async (req, res) => {
  	const id = req.params.id;

  	try {
	    const order = await Order.findById(id);
    	
		if (!order) {
      		return res.status(404).json({ error: 'Pedido não encontrado!' });
    	}

    	res.json(proorderduct);
  	} catch (error) {
    	res.status(500).json({ error: 'Erro ao obter pedido por ID' });
  	}	
};


const create = async (req, res) => {
  	const newItem = new Order(req.body);

  	try {
    	const savedItem = await newItem.save();
		
    	res.json(savedItem);
  	} catch (error) {
	    res.status(500).json({ error: 'Erro ao salvar pedido' });
  	}
};

// Função para atualizar um produto por ID
const update = async (req, res) => {
  	const itemId = req.params.id;

  	try {
    	const updatedItem = await Order.findByIdAndUpdate(itemId, req.body, { new: true });
    	
		if (!updatedItem) {
      		return res.status(404).json({ error: 'Pedido não encontrado' });
    	}

    	res.json(updatedItem);
  	} catch (error) {
	    res.status(500).json({ error: 'Erro ao atualizar pedido' });
  	}
};

module.exports = {
  	getAll,
	getById,
	create,
  	update,
};