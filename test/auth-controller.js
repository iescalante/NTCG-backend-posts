// const expect = require("chai").expect;
// const sinon = require("sinon");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();

// const User = require("../models/user");
// const AuthController = require("../controllers/auth");

// describe("Auth Controller", () => {
//   before(function () {
//     mongoose.connect(process.env.MONGODB_URI_TESTING).then((result) => {
//       const user = new User({
//         email: "test@test.com",
//         password: "tester",
//         name: "Test",
//         posts: [],
//         _id: "61981403d7d688305e312ab7",
//       });
//       return user.save();
//     });
//   });

//   it("should throw an error with code 500 if accessing the database fails", () => {
//     sinon.stub(User, "findOne");
//     User.findOne.throws();
//     const req = {
//       body: {
//         email: "test@test.com",
//         password: "Tester",
//       },
//     };
//     AuthController.login(req, {}, () => {}).then((result) => {
//       console.log(result);
//       expect(result).to.be.an("error");
//       expect(result).to.have.property("statusCode", 500);
//     });

//     User.findOne.restore();
//   });

//   it("should send a repsonse with a valid user status for existing user", () => {
//     const req = { userId: "61981403d7d688305e312ab7" };
//     const res = {
//       statusCode: 500,
//       userStatus: null,
//       status: function (code) {
//         this.statusCode = code;
//         return this;
//       },
//       json: function (data) {
//         this.userStatus = data.status;
//       },
//     };
//     AuthController.getUserStatus(req, res, () => {}).then(() => {
//       expect(res.statusCode).to.be.equal(200);
//       expect(res.userStatus).to.be.equal("New User");
//     });
//   });

//   after(function () {
//     User.deleteMany({}).then(() => {
//       return mongoose.disconnect();
//     });
//   });
// });
