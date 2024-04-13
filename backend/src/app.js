const express = require('express');
const songsRouter = require('../routes/Songs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/songs', songsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
