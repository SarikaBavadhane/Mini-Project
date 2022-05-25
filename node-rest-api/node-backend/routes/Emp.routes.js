const express = require('express');
const app = express();
const empRoute = express.Router();
let Emp = require('../model/emp');
// Add emp
empRoute.route('/add-employee').post((req, res, next) => {
    Emp.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});
// Get all emp
empRoute.route('/').get((req, res) => {
        Emp.find((error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    // Get emp
empRoute.route('/read-emp/:id').get((req, res) => {
    Emp.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update emp
empRoute.route('/update-emp/:id').put((req, res, next) => {
        Emp.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, (error, data) => {
            if (error) {
                return next(error);
                console.log(error)
            } else {
                res.json(data)
                console.log('Employee updated successfully!')
            }
        })
    })
    // Delete emp
empRoute.route('/delete-emp/:id').delete((req, res, next) => {
    Emp.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = empRoute;