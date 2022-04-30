const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
// path to access the other files
const path = require('path');
// require the package to create the session
const session = require('express-session');
// require the package to store the session
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

//set up the session and connect it to the database
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db:sequelize
  })
};

// midleware for express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middleware to let the app access the other static files
app.use(express.static(path.join(__dirname, 'public')));
// middlware for the session passing inteh sess object as a parameter
app.use(session(sess));

// turn on routes
app.use(routes);

// set up handlebars template engine for use
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});