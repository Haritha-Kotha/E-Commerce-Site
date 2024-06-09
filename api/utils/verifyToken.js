const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token;
    if(authHeader)
    {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
            if(error) {
                return res.status(404).json("Token not valid!..")
            }
            req.user = user
            next()
        })
    }
    else{
        return res.status(404).json("you r not authenticated")
    }
}

const verifyTokenAndAuthorization = (req,res,next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin )
        {
            //res.status(200).json(req.user)
            next()
        }
        else{
            return res.status(404).json("you r not authorized")
        }
    })
}

const verifyTokenAndAdmin = (req,res,next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin)
        {
            //res.status(200).json(req.user)
            next()
        }
        else{
            return res.status(404).json("you r not authorized")
        }
    })
}

module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
}