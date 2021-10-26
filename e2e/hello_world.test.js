const app = require("../src/server.js");
const supertest = require("supertest");

test("GET /", (done) => {
  supertest(app)
    .get("/")
    .expect(200)
    .then((res) => {
      expect(res.text).toBe("Hello World!");
      done();
    })
    .catch(done);
});
