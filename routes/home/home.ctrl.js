const home = (req, res) => {
  res.render("home/apple");
};

const login = (req, res) => {
  res.render("home/login");
};

module.exports = {
    home,
    login
}