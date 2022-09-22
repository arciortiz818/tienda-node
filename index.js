const express = require('express');
const routerApi = require('./routes/index');

const app = express();
routerApi(app);
app.listen(3000);
