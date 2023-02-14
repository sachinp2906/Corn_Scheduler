const express = require("express"); 
const cron = require("node-cron");
const router = express. Router();

router.post("/schedule", (_, res) => {
try {

    let obj = [
        {
            text: "One",
            time: "2023-02-12 19:55:00"
        },
        {
            text: "Two",
            time: "2023-02-12 19:55:03"
        },
        {
            text: "Three",
            time: "2023-02-12 19:55:06"
        },
        {
            text: "Four",
            time: "2023-02-12 19:55:09"
        },
        {
            text: "Five",
            time: "2023-02-12 19:55:12"
        },
        {
            text: "Six",
            time: "2023-02-12 19:55:15"
        }
    ]
    obj.forEach(t => {
        let timeStr = t.time
        let [dateStr, time] = timeStr.split(" ")
    
        let [year, month, date] = dateStr.split("-")
        let [hour, min, sec] = time.split(":")
    
        cron.schedule(`${sec} ${min} ${hour} ${date} ${month} *`, () => {
            console.log(t.text)
        })
    })

res.status(201).send({msg:"task scheduled"})
}
catch (error)

{ res.status(500).send("Server error")}})

module.exports = router;

let date = new Date();
let min = date.getMinutes();
let cuurrentdate =date.getDate();
let month = date.getMonth(); 
let hour =date.getHours();