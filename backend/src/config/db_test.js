import mongoose from "mongoose";

export const connectTestDB = async () => {
    // Cierra conexión existente (por si viene de app.js antiguo)
    if (mongoose.connection.readyState !== 0) {
        await mongoose.connection.close();
    }

    await mongoose.connect("mongodb://127.0.0.1:27017/taskmanager_test");
};

export const disconnectTestDB = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
};

