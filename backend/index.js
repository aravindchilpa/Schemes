import express, { request } from "express"
import mysql from 'mysql2';
import cors from 'cors'

const app = express();
const port = 3001; 





// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password',
  database: 'form'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.use(cors());

app.get("/",(req,res)=>{
  res.json("welcome..")
})

// Define an API endpoint to retrieve data
app.get('/agricutlure', (req, res) => {
  const query = 'SELECT * FROM schemes.agricutlure;'; 
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from database:', err);
      res.status(500).json({ error: 'Error fetching data' });
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
