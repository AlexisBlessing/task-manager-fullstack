
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 4000;

// Si estás ejecutando la app normalmente (NO tests):
if (process.env.NODE_ENV !== "test") {
    connectDB();
    app.listen(PORT, () => {
        console.log(`Backend running on port ${PORT}`);
    });
}

export default app;
