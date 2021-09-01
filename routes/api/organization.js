const router = require('express').Router();
const {
  getAllOrganizations,
  getOrganizationById,
  createOrganization,
  updateOrganization,
  deleteOrganization
} = require('../../controllers/organization-controller');

// /api/organizations
router
  .route('/')
  .get(getAllOrganizations)
  .post(createOrganization);

// /api/organizations/:id
router
  .route('/:id')
  .get(getOrganizationById)
  .put(updateOrganization)
  .delete(deleteOrganization);

module.exports = router;