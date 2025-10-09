/**
 * GET /
 * Retrieves all comments from the database.
 * 
 * @route GET /api/comments
 * @returns {Array<Object>} 200 - An array of comment objects
 * @returns {Error} 500 - Failed to fetch comments
 */

/**
 * DELETE /:id
 * Deletes a comment by its ID.
 * 
 * @route DELETE /api/comments/:id
 * @param {string} id.path.required - The ID of the comment to delete
 * @returns {Object} 200 - Success message
 * @returns {Error} 404 - Comment not found
 * @returns {Error} 500 - Failed to delete comment
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot  
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);

    } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedComment = await Comment.findByIdAndDelete(id);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});
