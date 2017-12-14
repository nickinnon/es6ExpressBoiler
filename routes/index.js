import express from 'express';
import User from '../api/models/User.js';

const router = express.Router();

router.get('/', (req, res, next) => {
    const languages = [
        { language: 'Spanish' },
        { language: "French" },
        { langauge: "German" }
    ];
    res.json(languages);
});

router.get('/users', (req, res, next) => {
    const users = [
        new User('James Coonce','jcoonce','none@none.com'),
        new User('Bob Coonce','bcoonce','none@none.com'),
        new User('Euri','euri','none@none.com'),
        new User('Norman','jcoonce','none@none.com'),
    ];
    res.json(users);
});

router.post('/user/create', (req, res) => {
    const body = req.body
    const user = new User(body.name, body.username, body.email);
    res.json(user);
});

export default router;
