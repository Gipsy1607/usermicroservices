const User = require('./userModel');

exports.createUser = async (req, res) => {
 try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
 } catch (error) {
    res.status(400).json({ message: error.message });
 }
};

exports.getAllUsers = async (req, res) => {
 try {
    const users = await User.find();
    res.status(200).json(users);
 } catch (error) {
    res.status(400).json({ message: error.message });
 }
};

// Add more CRUD methods for update and delete