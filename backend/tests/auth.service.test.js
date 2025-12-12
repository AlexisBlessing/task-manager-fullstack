import { connectTestDB, disconnectTestDB } from "../src/config/db_test.js";
import User from "../src/models/user.model.js";
import { registerService } from "../src/modules/auth/auth.service.js";

describe("Auth Service - Register", () => {
    beforeAll(async () => {
        await connectTestDB();
    });

    afterAll(async () => {
        await disconnectTestDB();
    });

    test("Debe registrar un usuario con email y password hasheado", async () => {
        const result = await registerService({
            email: "test@unit.com",
            password: "123456",
        });

        expect(result.email).toBe("test@unit.com");
        expect(result.uid).toBeDefined();
        expect(result.token).toBeDefined();

        const userInDB = await User.findOne({ email: "test@unit.com" });
        expect(userInDB).not.toBeNull();
        expect(userInDB.password).not.toBe("123456"); // debe estar hasheado
    });
});
