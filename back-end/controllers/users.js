import { Op } from "sequelize";
import { users } from "../models/users.js";
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
    const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Autentificare eșuată: utilizatorul nu există.' });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({ message: 'Autentificare eșuată: parola este incorectă.' });
    }

    res.json({ message: 'Autentificare reușită!', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'A apărut o eroare la autentificare.' });
  }
};

export const getUsers = async (req, res) => {
    const usernameQuery = req.query.username;
    const where = usernameQuery ? { username: { [Op.like]: `%${usernameQuery}%` } } : {};
    const usersList = await users.findAll({ where: where });
    res.status(200).send({records: usersList});
}

export const getUserById = async (req, res) => {
    const userId = req.params.userId;
    const user = await users.findOne({ where: { userId: userId } });
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(404).send({ message: `Nu am găsit niciun utilizator cu id-ul ${userId}.` });
    }
}

import bcrypt from 'bcrypt';

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await users.create({ username, email, password: hashedPassword });

    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'A apărut o eroare la crearea utilizatorului.' });
  }
};


export const updateUser = async (req, res) => {
    const userId = req.params.userId;
    const user = req.body;
    const updatedUser = await users.update(user, { where: { userId: userId } });
    if (updatedUser) {
        res.status(200).send({ message: `Utilizatorul cu id-ul ${userId} a fost actualizat.` });
    } else {
        res.status(404).send({ message: `Nu am găsit niciun utilizator cu id-ul ${userId}.` });
    }
}

export const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    const deletedUser = await users.destroy({ where: { userId: userId } });
    if (deletedUser) {
        res.status(200).send({ message: `Utilizatorul cu id-ul ${userId} a fost șters.` });
    } else {
        res.status(404).send({ message: `Nu am găsit niciun utilizator cu id-ul ${userId}.` });
    }
}



