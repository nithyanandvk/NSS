module.exports.about = (req, res) => {
  res.render("about.ejs");
};

module.exports.events = async (req, res) => {
  res.render("events.ejs");
};

module.exports.gallery = async(req, res) => {  
  res.render("gallery.ejs");
};

module.exports.ecstasy = async(req, res) => { 
  res.render("ecstasy.ejs");
};

module.exports.team = async (req, res) => { 
  res.render("team.ejs");
};