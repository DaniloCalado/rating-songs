const db = require('../config/db');

class Song {
  static async create(artist, song, photo = null) {
    const [result] = await db.query('INSERT INTO registred_songs (artist, song, photo) VALUES (?, ?, ?)', [artist, song, photo]);
    return result.insertId;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM registred_songs WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Song;
