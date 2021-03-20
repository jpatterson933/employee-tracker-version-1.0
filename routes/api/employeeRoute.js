const router = require('express').Router();

const Employee = require('../../models/Employees')


// GET all Employees
router.get('/', async (req, res) => {
  try {
    const userData = await Employee.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new Employee
router.post('/', async (req, res) => {
  try {
    const userData = await Employee.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET one Employee by id
router.get('/:id', async (req, res) => {
  try {
    const userData = await Employee.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a Employee
router.put('/:id', async (req, res) => {
  try {
    const userData = await Employee.update(req.body, {
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

// DELETE a a Employee
router.delete('/:id', async (req, res) => {
  try {
    const userData = await Employee.destroy({
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
