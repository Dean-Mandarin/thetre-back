const db = require('../db')

class PerformanceController {
  async createComment(req, res){
    const {commentText, stars} = req.body
    const newComment = await db.query(`INSERT INTO comments (text, stars) values ($1, $2) RETURNING *`, [commentText, stars])
    res.json(newComment.rows[0])
  }

  async getComments(req, res) {
    const comments = await db.query('SELECT * FROM comments')
    res.json(comments.rows)
  }

  async updateComment(req, res) {
    const {id, commentText, stars} = req.body
    const comment = await db.query(
      'UPDATE comments SET text = $1, stars = $2 WHERE comment_id = $3 RETURNING *',
      [commentText, stars, id]
    )
    res.json(comment.rows[0])
  }

  async deleteComment(req, res){
    const id = req.params.id
    const comment = await db.query('DELETE FROM comments WHERE comment_id = $1', [id])
    res.json(comment.rows)
  }

  async getAllPerformances(req, res) {
    const performances = await db.query('SELECT * FROM perfomances')
    res.json(performances.rows)
  }

  async getPerformancesByGenre(req, res) {
    const genre = req.params.genre
    const performances = await db.query('SELECT * FROM perfomances WHERE genre = $1', [genre])
    res.json(performances.rows)
  }
}

module.exports = new PerformanceController()

