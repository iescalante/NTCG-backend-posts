const expect = require("chai").expect;
const sinon = require("sinon");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const User = require("../models/user");
const Post = require("../models/post");
const FeedController = require("../controllers/feed");

describe("Feed Controller", () => {
  before(function () {
    return mongoose.connect(process.env.MONGODB_URI_TESTING).then((result) => {
      const user = new User({
        email: "test@test.com",
        password: "tester",
        name: "Test",
        posts: [],
        _id: "61981403d7d688305e312ab7",
      });
      return user.save();
    });
  });

  it("should add a created post to the posts of the creator", function () {
    const req = {
      body: {
        title: "Test Post",
        content: "Test Post",
        file: {
          path: "abc",
        },
        userId: "61981403d7d688305e312ab7",
      },
    };
    const res = {
      status: () => {
        // return this;
      },
      json: () => {},
    };
    return FeedController.createPost(req, res, () => {}).then(() => {
      expect(savedUser).to.have.property("posts");
      expect(savedUser.posts).to.have.length(1);
    });
  });

  after(function () {
    return User.deleteMany({}).then(() => {
      return mongoose.disconnect();
    });
  });
});
