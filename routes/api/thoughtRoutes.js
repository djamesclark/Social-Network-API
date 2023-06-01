const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addThought,
} = require('../../controllers/thoughtController.js');

// /api/students
router.route('/').get(getThoughts).post(createThought);

// /api/students/:studentId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/students/:studentId/assignments
router.route('/:thoughtId/thoughts').post(addThought);

module.exports = router;
