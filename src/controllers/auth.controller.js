import User from '../models/user.model.js'

export const register = async (req, res) => {
    const{email, password, username} = req.body;

    const newUser = new User({
        username,
        email,
        password,
    });

    newUser.save((err, result) => {
        if (err) {
            console.error('Error al guardar el usuario:', err);
            return;
        }
        res.send("registrando")
    });
}

export const login = (req, res) => res.send("login");