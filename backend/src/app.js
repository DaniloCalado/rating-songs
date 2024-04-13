const express = require('express');
const songsRouter = require('../routes/Songs');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use('/api/songs', songsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
