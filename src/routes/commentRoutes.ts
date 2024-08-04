import { Router } from 'express';
import { addComment, getComments } from '../controllers/commentController';
import { authenticateJWT } from '../middlewares/authMiddleware';

const router = Router();

router.post('/comments', authenticateJWT, addComment);
router.get('/comments/:postId', getComments);

export default router;
