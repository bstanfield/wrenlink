const express = require('express');

const port = 4444;

const app = express();

const wren = 'https://projectwren.com';
const ref = '?ref=wrenlink';

app.get('/', async (req, res) => {
  return res.redirect(`${wren}${ref}`);
});

app.get('/p/:project', async (req, res) => {
  const project = req.params.project;
  if (project === 'fund' || project === 'climate-fund') {
    return res.redirect(`${wren}/portfolios/wren-climate-fund${ref}`);
  }
  return res.redirect(`${wren}/projects/${project}${ref}`);
});

app.get('/:username', async (req, res) => {
  const username = req.params.username;
  return res.redirect(`${wren}/profile/${username}${ref}`);
});

app.get('/join/:username', async (req, res) => {
  const username = req.params.username;
  return res.redirect(`${wren}/join/${username}${ref}`);
});

app.get('*', (req, res) => {
  return res.redirect(`${wren}${req.originalUrl}${ref}`);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));