StandupTimer.Router.reopen({
  location: "history"
})

StandupTimer.Router.map(function(match) {
  this.route("index", {path: "/"});
});