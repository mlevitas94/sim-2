module.exports={
    getHouses : (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_houses()
        .then(houses => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send('skynet found something wrong');
            console.log(err)
        })
    }
}