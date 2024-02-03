const {pptrLogic} = require('../services/pptr');

module.exports.postToGroups = async (req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const profileId = req.body.profileId;
        // console.log(email,password,profileId)
        await pptrLogic(email,password,profileId);
        return res.status(200).send({message:"Posts shared sucessfully to groups"});

    } catch (e)  {
        return res.status(e.status || 500).send({message:e.message || 'Something went wrong'});
    }
}