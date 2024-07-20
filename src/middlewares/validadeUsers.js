const validadeCreation  = (req, res, next) =>{
    const {body} = req;
    if(body.name == undefined){
        return res.status(400).json({message: 'The field "name" is required'});
    }

    if(body.name == ''){
        return res.status(400).json({message: 'Name cannot be empty'});
    }

    /*if(body.email == undefined){
        return res.status(400).json({message: 'The field "email" is required'});
    }

    if(body.email == ''){
        return res.status(400).json({message: 'Email cannot be empty'});
    }*/

    next();
}

module.exports = {
    validadeCreation
}