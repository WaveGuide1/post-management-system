/**
 * @swagger
 * components:
 *   schemas:
 *     CreatePost:
 *       type: object
 *       required:
 *         - content
 *         - category
 *         - image
 *       properties:
 *         content:
 *           type: string
 *         category:
 *           type: string
 *         image:
 *           type: string
 *           format: binary
 *     EditPost:
 *       type: object
 *       required:
 *         - content
 *         - category
 *       properties:
 *         content:
 *           type: string
 *         category:
 *           type: string
 * tags:
 *   - name: Posts
 *     description: API for managing posts
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/CreatePost'
 *     responses:
 *       201:
 *         description: The created post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreatePost'
 *       500:
 *         description: Internal server error
 *   get:
 *     summary: Get all posts
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [createdAt, upvotes]
 *           default: createdAt
 *         description: The field to sort posts by
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: The category to filter posts by
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: The number of posts to return
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number to return
 *     responses:
 *       200:
 *         description: A list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CreatePost'
 *       500:
 *         description: Internal server error
 * /api/posts/{id}:
 *   put:
 *     summary: Edit a post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EditPost'
 *     responses:
 *       200:
 *         description: The updated post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreatePost'
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Delete a post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post ID
 *     responses:
 *       204:
 *         description: No content
 *       500:
 *         description: Internal server error
 * /api/posts/{id}/upvote:
 *   post:
 *     summary: Upvote a post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post ID
 *     responses:
 *       200:
 *         description: Post upvoted successfully
 *       500:
 *         description: Internal server error
 * /api/posts/{id}/downvote:
 *   post:
 *     summary: Downvote a post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post ID
 *     responses:
 *       200:
 *         description: Post downvoted successfully
 *       500:
 *         description: Internal server error
 */