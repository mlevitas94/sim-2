module.exports={
    getHouses : (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_houses()
        .then(houses => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send('skynet found something wrong');
            console.log(err)
        })
    },

    addHouse: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {name, address, city, state, zipcode} = req.body

        dbInstance.add_house([name, address, city, state, zipcode])
        .then(() => res.status(200).send('All good'))
        .catch(err => { res.status(500).send('skynet found something wrong'); console.log(err)})


    },

    deleteHouse: (req,res,next) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.delete_house(id)
        .then(() => res.status(200).send('House deleted'))


    }
}