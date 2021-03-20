const router = require('express').Router();

const Department = require('../../models/departments')


// GET all departments
router.get('/', async (req, res) => {
  try {
    const userData = await Department.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new department
router.post('/', async (req, res) => {
  try {
    const userData = await Department.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET one department by id
router.get('/:id', async (req, res) => {
  try {
    const userData = await Department.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a department
router.put('/:id', async (req, res) => {
  try {
    const userData = await Department.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a a department
router.delete('/:id', async (req, res) => {
  try {
    const userData = await Department.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
