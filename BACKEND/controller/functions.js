const { model, Error } = require('mongoose');
const feedblogs = require("../models/DB")

const MainPage = ((req, res) => {
feedblogs.find()
        .then((result) => res.render("index", { feeds: result, A:true }))
        .catch(error => res.status(404).send("some err"));
})



function CreatFeed(req, res) {
    const { name, message } = req.body;
    const feed = new feedblogs({
        name:name,
        message: message,
        });
    console.log(feed)
    feed.save()
        .then(() => res.redirect("/feed"))
        .catch(err =>res.status(404).send("the feed not found"))    
}


const GetFeedId = ((req, res) => {
    var feedId = req.params.id;
    feedblogs.findById(feedId)
             .then(feed => {
                  if (!feed) {
                       return res.status(404).send("the feed not found");
                    }
            console.log(feed);
            res.render("feed", {feed})
        })
})

const DeleteFeedId = ((req, res) => {
    var feedId = req.params.id;
    feedblogs.deleteOne({ _id:feedId})
             .then(() => res.redirect("/feed"))
             .catch(err => res.status(404).send("the feed not deleted"))


})

const EditFeedId = ((req, res) => {
    if (req.method === "GET") {
        var feedId = req.params.id;
        feedblogs.findById(feedId)
                 .then(result => res.render("editfeed", { feed: result }))
    } else if (req.method === "POST") {
        var feedId = req.params.id;
        console.log(feedId)
        const { name, message } = req.body;
        feedblogs.findByIdAndUpdate(feedId , { name,message })
                 .then(() => res.redirect("/feed"));
       
    }
})


module.exports={
    MainPage,
    CreatFeed,
    GetFeedId,
    DeleteFeedId,
    EditFeedId,
  
    }