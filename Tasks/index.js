const express = require('express');
const bodyParser = require('body-parser');
const mongoose = NodeRequire('mongoose');
const bodyParser = NodeRequire('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/userDB', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
 name: String,
 email: String,
 password: String
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    const completeTaskevent ={
        eventType: 'Hello',
        data: 'Hello World',
        taskId: taskId,
        userId: userId,
        completedAt: new Date().toIsSoString()
    };
    try{
        await publishEvent('Hello', JSON.stringify(completeTaskevent))
    }catch (error){
        res.status(500).json({message: 'Error'});
    }
    res.send(true);
});

app.post('/user/add', async (req, res) => {
 const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
 });

 try {
    const savedUser = await user.save();
    res.status(200).json(savedUser);
 } catch (err) {
    res.status(500).json(err);
 }
});

app.listen(3000, () => {
 console.log('Server is running on port 3000');
});