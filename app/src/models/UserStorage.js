class UserStorage {
  static #users = {
    id: ["taewok516", "나개발", "김팀장"],
    pwd: ["1234", "1234", "123456"],
    name: ["김태욱", "안정민", "김태휘"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        //hasOwnProperty() 메소드는 객체가 특정 프로퍼티를 가지고 있는지를  나타내는 boolean 값을 반환한다.
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsersInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users); // =>[id,pwd,name]
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
