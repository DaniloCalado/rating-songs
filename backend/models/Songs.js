const db = require('../config/db');

class Song {

    static async getAll() {
        const [rows] = await db.query('SELECT * FROM registred_songs');
        return rows;
    }

    static async create(artist, song, photo = null) {
        const [result] = await db.query('INSERT INTO registred_songs (artist, song, photo, total_votes) VALUES (?, ?, ?, ?)', [artist, song, photo, 0]);
        return result.insertId;
    }

    static async delete(id) {
        const [result] = await db.query('DELETE FROM registred_songs WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }

    static async vote(id) {
        const [result] = await db.query('UPDATE registred_songs SET total_votes = total_votes + 1 WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = Song;
