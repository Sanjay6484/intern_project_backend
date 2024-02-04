const Email = require('../model/emailSchema');

module.exports.emailController = async (req, res) => {
    const {email} = req.body;

    try {
        await Email.insertMany({email}).then((result) => {
            res.json({"msg": "success"});
        }).catch((err) => {
            res.json({"msg": "error"});
        });
    } catch (err) {
        console.log(err);
        res.json({"msg": "error"});
    }
}