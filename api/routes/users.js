const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const https = require("https");
//UPDATE
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your account!");
    }
  });
  
//DELETE
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        try {
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json("User has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } catch (err) {
        res.status(404).json("User not found!");
      }
    } else {
      res.status(401).json("You can delete only your account!");
    }
});

//GET USER
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post("/weather", function(req, res){

    const query = req.body.cityName;
    const apiKey = "de48399f6869aaa89e8d5aaa09c20dc6";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
  
    https.get(url, function(response) {
     console.log(response.statusCode);
     response.on("data", function(data) {
      try {
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        const weatherInfo = {
          Temp: temp,
          Description: description,
          Icon: icon,
          ImageURL : imageURL
        }
        res.status(200).json(weatherInfo);
      } catch (err) {
        res.status(500).json(err);
        
      }
       
      //  res.write("<p>The weather is currently " + description + "</p>");
      //  res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius.</h1>");
      //  res.write("<img src=" + imageURL + ">");
      //  res.send();
  
     })
    })

})


module.exports = router;