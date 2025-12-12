import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateJWT } from "../../utils/generateJWT.js";

export const registerService = async ({ email, password }) => {
    const exists = await User.findOne({ email });
    if (exists) throw new Error("El email ya está registrado");

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        password: hashed,
    });

    return {
        uid: user._id,
        email: user.email,
        token: generateJWT(user._id),
    };
};

export const loginService = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Credenciales incorrectas");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Credenciales incorrectas");

    return {
        uid: user._id,
        email: user.email,
        token: generateJWT(user._id),
    };
};
