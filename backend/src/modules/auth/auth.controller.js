import { registerService, loginService } from "./auth.service.js";

export const register = async (req, res) => {
    try {
        const data = await registerService(req.body);
        return res.status(201).json(data);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const data = await loginService(req.body);
        return res.json(data);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};
