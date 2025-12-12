
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== "test") {
    connectDB()
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Backend running on port ${PORT}`);
            });
        })
        .catch((err) => {
            console.error("Error conectando a la DB:", err);
            process.exit(1); // Termina el proceso si falla la DB
        });
}

export default app;
