const errors = require('restify-errors');
const Accounts = require('../models/Accounts');

module.exports = (server) => {

	//getting all accounts
	server.get('/accounts', async (req, res, next) => {
		try{
			const accounts = await Accounts.find({});
			res.send(accounts);
			next();
		} catch (err){
			return next(new errors.InvalidContentError(err));
		}
	});

	//getting single account via id
	server.get('/accounts/:id', async (req, res, next) => {
		try{
			const account = await Accounts.findById(req.params.id);
			res.send(account);
			next();
		} catch (err){
			return next(new errors.ResourceNotFoundError(`Requested ID of ${req.params.id} does not exist`));
		}
	});

	//add account
	server.post('/accounts', async (req, res, next) => {
		const {name, account_id, balance} = req.body;
		
		const accounts = new Accounts({
			name,
			account_id,
			balance
		});

		try{
			const newAccounts = await accounts.save();
			res.send(201);
			next();
		} catch (err){
			return next(new errors.InternalError(err.message));
		}
	});
};
