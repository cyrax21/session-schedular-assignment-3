const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();

mongoose
	.connect("mongodb://localhost:27017/shopkart-app", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
	})
	.then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(cors());



// import routes
const courseRoutes = require('./routes/courseRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

// using routes
app.use('/api', courseRoutes);
app.use('/api', sessionRoutes);



const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
});
