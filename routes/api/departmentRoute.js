const router = require('express').Router();

const Department = require('../../models/departments')


// GET all departments
router.get('/', async (req, res) => {
  try {
    const deptData = await Department.findAll();
    res.status(200).json(deptData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new department
router.post('/', async (req, res) => {
  try {
    const deptData = await Department.create({
      department_name: req.body.department_name,
      department_id: req.body.department_id
    });
    res.status(200).json(deptData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET one department by id
router.get('/:id', async (req, res) => {
  try {
    const deptData = await Department.findByPk(req.params.id);
    if (!deptData) {
      res.status(404).json({ message: 'No dept with this id!' });
      return;
    }
    res.status(200).json(deptData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a department
router.put('/:id', async (req, res) => {
  try {
    const deptData = await Department.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!deptData[0]) {
      res.status(404).json({ message: 'No dept with this id!' });
      return;
    }
    res.status(200).json(deptData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a a department
router.delete('/:id', async (req, res) => {
  try {
    const deptData = await Department.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deptData) {
      res.status(404).json({ message: 'No dept with this id!' });
      return;
    }
    res.status(200).json(deptData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
