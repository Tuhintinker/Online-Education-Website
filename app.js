const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const adminroute = require('./routes/admin.js');
const userroute = require('./routes/user.js');
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname,'script')));
app.use(userroute)
app.use('/admin',adminroute);

app.listen(8080);


//

// app.js (or your main server file)

const port = process.env.PORT || 3000;

const db = require('./db');

app.use(express.json()); // Middleware to parse JSON

app.post('/register', (req, res) => {
  const { name, email, contact, age, address, medicalHistory } = req.body;

  const query = 'INSERT INTO patients (name, email, contact, age, address, medicalHistory) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [name, email, contact, age, address, medicalHistory], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Patient registered successfully', patientId: results.insertId });
  });
});

// Other routes...

app.get('/quiz', (req, res) => {
  res.render('quiz'); // Render the quiz template
});

app.post('/submit-quiz', (req, res) => {
  const answers = req.body;
  const correctAnswers = {
    q1: 'Paris',
    q2: '4'
  };

  let score = 0;
  for (const key in correctAnswers) {
    if (answers[key] === correctAnswers[key]) {
      score += 1;
    }
  }

  res.send(`You scored ${score} out of ${Object.keys(correctAnswers).length}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
