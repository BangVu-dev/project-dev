const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const route = require('./routes');
const Handlebars = require("handlebars");
const MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);
const moment = require('moment-timezone');
moment().tz("UTC").format();
moment().tz("Asia/Bangkok").format();

// Connect to DB
mongoose.connect('mongodb+srv://admin:0782673677@cluster0.e9zkk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.');
  } else {
    console.log('Error in DB connection : ' + err);
  }
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// Phần trung gian để lấy dữ liệu từ phương thức POST
app.use(
    express.urlencoded({
        extended: true,
    }),
);
// nếu dùng code JS thì lấy bằng JSON
app.use(express.json());

// static file
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

// add middleware
// app.use(sortMiddleware);

// Teamplate engine
app.engine(
    'hbs',
    handlebars({
      extname: '.hbs',
    }),
);

app.set('view engine', 'ejs');
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes init
route(app);
var login = require('./routes/login');
app.use('/', login);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

