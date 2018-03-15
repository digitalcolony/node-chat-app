const expect = require("expect");
const { Users } = require("./users");

describe("Users", () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: "1",
        name: "Mike",
        room: "Node Course"
      },
      {
        id: "2",
        name: "Jen",
        room: "React Course"
      },
      {
        id: "3",
        name: "Julia",
        room: "Node Course"
      }
    ];
  });
  it("should add new user", () => {
    var users = new Users();
    var user = {
      id: "123",
      name: "Pepper",
      room: "Cat food"
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it("should return names for Node Course", () => {
    var userList = users.getUserList("Node Course");
    expect(userList).toEqual(["Mike", "Julia"]);
  });
  it("should return names for React Course", () => {
    var userList = users.getUserList("React Course");
    expect(userList).toEqual(["Jen"]);
  });

  it("should remove a user", () => {
    var userId = "1";
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });
  it("should not remove a user", () => {
    var userId = "33333";
    var user = users.removeUser(userId);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });
  it("should find user", () => {
    var userId = "3";
    var resUser = users.getUser(userId);
    expect(resUser.id).toBe(userId);
  });
  it("should not find user", () => {
    var userId = "33333";
    var resUser = users.getUser(userId);
    expect(resUser).toNotExist();
  });
});
