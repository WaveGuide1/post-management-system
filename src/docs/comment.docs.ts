/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - content
 *         - postId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the comment
 *         content:
 *           type: string
 *           description: The content of the comment
 *         postId:
 *           type: string
 *           description: The ID of the post the comment is related to
 *         parentCommentId:
 *           type: string
 *           description: The ID of the parent comment if it is a reply
 *         user:
 *           type: object
 *           description: The user who created the comment
 *       example:
 *         content: "This is a comment."
 *         postId: "60d21b967ab7c4b8f5c7b9f6"
 *         parentCommentId: "60d21b967ab7c4b8f5c7b9f6"
 * 
 * /api/comments:
 *   post:
 *     summary: Create a new comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               postId:
 *                 type: string
 *               parentCommentId:
 *                 type: string
 *             example:
 *               content: "This is a comment."
 *               postId: "60d21b967ab7c4b8f5c7b9f6"
 *               parentCommentId: "60d21b967ab7c4b8f5c7b9f6"
 *     responses:
 *       201:
 *         description: The comment was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Some server error
 * 
 * /api/comments/{postId}:
 *   get:
 *     summary: Get all comments for a post
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: postId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post
 *     responses:
 *       200:
 *         description: The list of comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Some server error
 */
