const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

let token;

app.post("/login",
    async (req, res) => {

        const existingUserId=req.body;
        
        try {
            token = jwt.sign(
                {
                    userId: existingUserId
                },
                "secretkeyappearshere",
                { expiresIn: "1h" }
            );
        } catch (err) {
            console.log(err);
            const error =
                new Error("Error! Something went wrong.");
            return next(error);
        }

        res
            .status(200)
            .json({
                success: true,
                data: {
                    userId: existingUserId,
                    token: token,
                },
            });
    });

  
app.get('/protected', (req, res) => {
   
   const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Authorization token required"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, "secretkeyappearshere");

        res.status(200).json({
            success: true,
            message: "Welcome"          
        });
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Token expired or invalid"
        });
    }
});
  

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});