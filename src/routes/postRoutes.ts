import { Router } from 'express';
import { createPost, editPost, deletePost, getPosts, upvotePost, downvotePost } from '../controllers/postController';
import { authenticateJWT } from '../middlewares/authMiddleware';
import { validateRequest } from '../middlewares/validationMiddleware';
import { postSchema, editPostSchema } from '../utils/postValidation';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

const router = Router();

router.post('/posts', authenticateJWT, upload.single('image'), validateRequest(postSchema), createPost);
router.put('/posts/:id', authenticateJWT, validateRequest(editPostSchema), editPost);
router.delete('/posts/:id', authenticateJWT, deletePost);
router.get('/posts', getPosts);
router.post('/posts/:id/upvote', authenticateJWT, upvotePost);
router.post('/posts/:id/downvote', authenticateJWT, downvotePost);

export default router;