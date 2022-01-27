const db = require('../database/models');


const mainAPIController = {

    list: (req, res) => {
        db.Record.findAll({
            include: ['type', 'category']
        })
            .then(data => {

                let totalIngresos = 0;
                let totalEgresos = 0;
                let balance = 0;

                for (let i = 0; i < data.length; i++) {
                    if (data[i].type_id === 1) {
                        totalIngresos += data[i].amount
                    } else {
                        totalEgresos += data[i].amount
                    }
                }
                balance = totalIngresos - totalEgresos;


                let respuesta = {
                    meta: {
                        status: 200,
                        count: data.length,
                        url: 'http://localhost:3000/api/records/'
                    },
                    data: {
                        totalBalance: balance,
                        totalIngresos: totalIngresos,
                        totalEgresos: totalEgresos,
                        records: data,
                    }
                }

                res.json(respuesta);

            })
            .catch(error => (error))
    },

    detail: (req, res) => {
        db.Record.findByPk(req.params.id, {
            include: ['type', 'category']
        })
            .then(data => {
                let respuesta;
                if (data) {
                    respuesta = {
                        meta: {
                            status: 200,
                            count: data.length,
                            url: 'http://localhost:3000/api/records/' + req.params.id
                        },
                        data: {
                            records: data
                        }
                    }

                    res.json(respuesta);

                } else {

                    return res.json('El registro con ID ' + req.params.id + ' no existe.')

                }


            })
            .catch(error => (error))
    },

    create: (req, res) => {
        db.Record.create(req.body)
            .then(record => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        count: record.length,
                        url: 'http://localhost:3000/api/records/' + record.id
                    },
                    data: {
                        record: record
                    }
                })

            })
            .catch(error => (error))

    },

    destroy: (req, res) => {
        db.Record.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(response => {

                if (response == 1) {
                    return res.status(200).json({
                        meta: {
                            status: 200,
                            description: 'El registro con ID ' + req.params.id + ' ha sido eliminado con éxito'
                        }
                    })
                } else {
                    return res.json('El registro con ID ' + req.params.id + ' no existe.')
                }

            })
            .catch(error => (error))

    },

    update: (req, res) => {
        console.log(req.body)
        db.Record.update({
            category_id: req.body.category_id,
            concept: req.body.concept,
            amount: req.body.amount,
            record_date: req.body.record_date
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(response => {
                if (response == 1) {
                    return res.status(200).json({
                        meta: {
                            status: 200,
                            description: 'El registro con ID ' + req.params.id + ' ha sido modificado con éxito'
                        }
                    })
                } else {
                    return res.json('Ocurrió un error. El registro con ID ' + req.params.id + ' no se ha modificado.')
                }

            })
            .catch(error => (error))

    },
    listCategories: (req, res) => {
        db.Category.findAll()
            .then(data => {

                let respuesta = {
                    meta: {
                        status: 200,
                        count: data.length,
                        url: 'http://localhost:3000/api/categories/'
                    },
                    data: {
                        records: data
                    }
                }

                res.json(respuesta);

            })
            .catch(error => (error))
    },
    listIn: (req, res) => {
        db.Record.findAll({
            include: ['type', 'category'],
            where: {
                type_id: 1
            }
        })
            .then(data => {


                let respuesta = {
                    meta: {
                        status: 200,
                        count: data.length,
                        url: 'http://localhost:3000/api/records/listin'
                    },
                    data: {
                        recordsIn: data,
                    }
                }

                res.json(respuesta);

            })
            .catch(error => (error))
    },
    listOut: (req, res) => {
        db.Record.findAll({
            include: ['type', 'category'],
            where: {
                type_id: 2
            }
        })
            .then(data => {


                let respuesta = {
                    meta: {
                        status: 200,
                        count: data.length,
                        url: 'http://localhost:3000/api/records/listout'
                    },
                    data: {
                        recordsOut: data,
                    }
                }

                res.json(respuesta);

            })
            .catch(error => (error))
    },
    listByCategory: (req, res) => {
        db.Record.findAll({
            include: ['type', 'category'],
            where: {
                category_id: req.params.id
            }
        })
            .then(data => {


                let respuesta = {
                    meta: {
                        status: 200,
                        count: data.length,
                        url: 'http://localhost:3000/api/records/listByCategory/' + req.params.id
                    },
                    data: {
                        records: data,
                    }
                }

                res.json(respuesta);

            })
            .catch(error => (error))
    }
}

module.exports = mainAPIController;