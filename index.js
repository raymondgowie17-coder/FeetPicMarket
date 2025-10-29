const express = require('express');
const cors = require('cors');
const { sequelize } = require('./db/sequelize');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

app.get('/health', (req, res) => {
  res.json({ ok: true, env: 'render', time: new Date().toISOString() });
});

// MVP placeholder routes (so frontend won't 404)
app.get('/', (req, res) => res.send('FeetPicMarket API is running.'));
app.get('/listings', (req, res) => res.json({ listings: [] }));
app.get('/wallet/me', (req, res) => res.json({ wallet: { balanceUsd: 0 } }));

sequelize.authenticate()
  .then(() => console.log('✅ Database connected successfully.'))
  .catch(err => console.error('❌ Database connection error:', err));


app.listen(PORT, () => {
  console.log(`[api] listening on :${PORT}`);
});
