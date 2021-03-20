const router = require('express').Router();

const Role = require('../../models/roles')


// GET all Roles
router.get('/', async (req, res) => {
  try {
    const userData = await Role.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new Role
router.post('/', async (req, res) => {
  try {
    const userData = await Role.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET one Role by id
router.get('/:id', async (req, res) => {
  try {
    const userData = await Role.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a Role
router.put('/:id', async (req, res) => {
  try {
    const userData = await Role.update(req.body, {
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

// DELETE a a Role
router.delete('/:id', async (req, res) => {
  try {
    const userData = await Role.destroy({
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
