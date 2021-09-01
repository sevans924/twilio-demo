const router = require('express').Router();
const organizationRoutes = require('./organization');


router.use('/organization', organizationRoutes);

module.exports = router;