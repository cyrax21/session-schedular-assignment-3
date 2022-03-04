const express = require('express');
const {addSession, updateSessions, getSessionsByCourse, removeSession} = require('../controllers/session');
const router = express.Router();

// add session
router.post('/session', addSession);

// update the session
router.put('/session/:id', updateSessions);

// Get all the session for a course (paginated)
router.get('/session/:course', getSessionsByCourse);

// delete all the sessions
router.delete('/session/:id', removeSession);

module.exports = router;