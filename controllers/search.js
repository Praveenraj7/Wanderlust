const Listing = require("../models/listing.js");

module.exports.searchController = async (req, res) => {
  let { search } = req.body;
  function toTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  }
  search = toTitleCase(search);
  const allListings = await Listing.find({
    $or: [{ location: search }, { country: search }, { title: search }],
  });
  if (allListings.length == 0) {
    req.flash("error", "No airbnb is available for your search");
    res.redirect("/listings");
  } else {
    res.render("index.ejs", { allListings });
  }
};
