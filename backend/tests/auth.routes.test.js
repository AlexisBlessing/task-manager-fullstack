import request from "supertest";
import app from "../src/app.js";
import { connectTestDB, disconnectTestDB } from "../src/config/db_test.js";

describe("Auth Routes", () => {
    beforeAll(async () => {
        await connectTestDB();
    });

    afterAll(async () => {
        await disconnectTestDB();
    });

    test("POST /api/auth/register debe crear un usuario", async () => {
        const res = await request(app)
            .post("/api/auth/register")
            .send({
                email: "test@integration.com",
                password: "123456",
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.email).toBe("test@integration.com");
        expect(res.body.token).toBeDefined();
    });
});
