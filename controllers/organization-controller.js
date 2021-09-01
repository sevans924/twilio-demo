const { Organization } = require('../models');

const organizationController = {
        // get all Organizations
        getAllOrganizations(req, res) {
          Organization.find({})
            .then(dbOrganizationData => res.json(dbOrganizationData))
            .catch(err => {
              console.log(err);
              res.status(400).json(err);
            });
        },
      
        // get one Organization by id
        getOrganizationById({ params }, res) {
          Organization.findOne({ _id: params.id })
            .then(dbOrganizationData => {
              // If no Organization is found, send 404
              if (!dbOrganizationData) {
                res.status(404).json({ message: 'No Organization found with this id!' });
                return;
              }
              res.json(dbOrganizationData);
            })
            .catch(err => {
              console.log(err);
              res.status(400).json(err);
            });
        },
      
        // createOrganization
        createOrganization({ body }, res) {
          Organization.create(body)
            .then(dbOrganizationData => res.json(dbOrganizationData))
            .catch(err => res.json(err));
        },
      
        // update Organization by id
        updateOrganization({ params, body }, res) {
          Organization.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbOrganizationData => {
              if (!dbOrganizationData) {
                res.status(404).json({ message: 'No Organization found with this id!' });
                return;
              }
              res.json(dbOrganizationData);
            })
            .catch(err => res.json(err));
        },
      
        // delete Organization
        deleteOrganization({ params }, res) {
          Organization.findOneAndDelete({ _id: params.id })
            .then(dbOrganizationData => res.json(dbOrganizationData))
            .catch(err => res.json(err));
        }
      };
    

module.exports = organizationController;