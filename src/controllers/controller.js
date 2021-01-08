const axios = require("axios")
const API_KEY = "37574a19020ea7e196b4628f0bfe5886"

exports.renderHomePage = (req,res) => {
    res.render("index")
}

exports.renderAboutPage = (req,res) => {
    res.render("About")
}

exports.getWeather = (req, res) => {
    const city = req.body.city
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    axios.get(url).then((response) => {
        res.render("index", {
            weather: `It is currently ${response.data.main.temp} degree celcius in ${response.data.name}`
        })
    }).catch((error) => {
        console.log(error)
    })
}