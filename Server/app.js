const express = require("express");
const collection = require("./mongo");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/login", cors(), (req, res) => {

})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await collection.findOne({ email: email })
        if (check) {
            if(check.password===password)
             res.send(check)
        }
        else {
            res.send("do not exist")
        }
    }
    catch (e) {
        res.send(e)
    }
})
app.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    console.log(firstName, lastName, email, password)

    try {
        const check = await collection.findOne({ email: email })
        if (check) {
            res.send("User already esist")
        }
        else {
            const user = await collection.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            res.send("Resistered successfully")
        }
    }
    catch (e) {
        console.log(e)
    }
})

// Multer for images
const multer  = require('multer')
const upload = multer({dest:"/uploads"})

app.post('/upload-image', upload.single('image'), async function (req, res) {
  // req.body contains the text fields
  console.log(req.body)
  res.send("uploaded")
})

app.listen(8000, () => {
    console.log("running")
})