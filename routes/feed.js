const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/posts
router.get('/posts', isAuth, feedController.getPosts);

// POST /feed/post
router.post(
  '/post',
  [
    body('playername')
      .trim()
      .isLength({ min: 5 }),
    body('description')
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.createPost
);

router.get('/post/:postId', isAuth, feedController.getPost);

router.put(
  '/post/:postId',
  isAuth,
  [
    body('playername')
      .trim()
      .isLength({ min: 5 }),
    body('description')
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.updatePost
);

router.put(
  '/post/update/:playerName',
  [
    body('playername')
      .trim()
      .isLength({ min: 5 }),
    body('description')
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.updatePlayer
);

router.get(
    '/post/update/incrementkills/:playerName',
    feedController.incrementKills
);

router.get(
    '/post/update/incrementdeaths/:playerName',
    feedController.incrementDeaths
);

router.get(
    '/post/update/verifyplayer/:playerName',
    feedController.verifyPlayer
);

router.delete('/post/:postId', isAuth, feedController.deletePost);

module.exports = router;
