// controllers/userController.js
const userRepo = require('../repositories/user.repository.js');

exports.get = async (req, res, next) => {
  try {
    const user = await userRepo.getById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
};