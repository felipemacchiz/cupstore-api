const Order = require('../models/Order');


const getAll = async (req, res) => {
	const query = req.query._id;

	try {
		let orders;

		if (query) {
			orders = await Order.find({ _id: query.split(',') });
		} else {
			orders = await Order.find();
		}

    	res.json(orders);
  	} catch (error) {
    	res.status(500).json({ msg: 'Erro ao obter lista de pedidos!', error });
  	}
};


const getById = async (req, res) => {
  	const id = req.params.id;

  	try {
	    const order = await Order.findById(id);
    	
		if (!order) {
      		return res.status(404).json({ msg: 'Pedido não encontrado!' });
    	}

    	res.json(proorderduct);
  	} catch (error) {
    	res.status(500).json({ msg: 'Erro ao obter pedido por ID', error });
  	}	
};


const create = async (req, res) => {
  	const newItem = new Order(req.body);

  	try {
    	const savedItem = await newItem.save();
		
    	res.json(savedItem);
  	} catch (error) {
	    res.status(500).json({ msg: 'Erro ao salvar pedido', error });
  	}
};

// Função para atualizar um produto por ID
const update = async (req, res) => {
  	const itemId = req.params.id;

  	try {
    	const updatedItem = await Order.findByIdAndUpdate(itemId, req.body, { new: true });
    	
		if (!updatedItem) {
      		return res.status(404).json({ msg: 'Pedido não encontrado' });
    	}

    	res.json(updatedItem);
  	} catch (error) {
	    res.status(500).json({ msg: 'Erro ao atualizar pedido', error });
  	}
};

module.exports = {
  	getAll,
	getById,
	create,
  	update,
};