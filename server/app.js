const express = require('express');
const cors = require('cors');
const transactionRoute = require('./routes/transactionRoute');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', transactionRoute);

const PORT = 8181;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
