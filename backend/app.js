const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { routes } = require('./routes');

const { PORT = 3000 } = process.env;
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'https://mesto36.nomoredomains.xyz',
    credentials: true,
  }),
);

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(routes);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/mestodb', {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    });

    app.listen(PORT);
  } catch (err) {
    console.error(err);
  }
}

main();
