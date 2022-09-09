module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

        getFortune: (req, res) => {
            const fortune = ["The love of your life is stepping into your planet this summer!",
             "Everyone agrees. You are the best!",
              "You will be called in to fulfill a position of high honor and responsibility!",
            "Failure is only the opportunity to begin again more intelligently!",
        "Well-arranged time is the surest sign of a well-arranged mind!"] ;
          
            // choose random compliment
            let randomIndex = Math.floor(Math.random() * fortune.length);
            let randomFortune = fortune[randomIndex];
          
            res.status(200).send(randomFortune);
    }

}