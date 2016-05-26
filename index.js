var path = require("path"),
    fs = require("fs");

var content = function(path) {
  var s = "<!DOCTYPE HTML><html><head><meta charset='UTF-8'><title>Redirecting... Page moved</title>" +
        "<link rel='canonical' href='{}'><meta http-equiv=refresh content='0; url={:?}'></head>" +
        "<body><h1>Redirecting... Page moved...</h1>" +
        "<p><a href='{}'>Click here if you are not redirected</a></p>" +
        "<script>window.location.href='{}';</script>" +
        "</body></html>";
  return s.replace(/\{\}/gm, path).replace(/\{\:\?\}/gm, encodeURI(path));
};

module.exports = {
  hooks: {
    "finish": function() {
      var redirects = this.config.get("redirects");
      if (!redirects) return;

      var g = this;
      redirects.forEach(function (item) {
        if (!item.from || !item.to) return;
        g.output.writeFile(item.from, content(item.to));
        g.log.debug("Redirect " + item.from + " -> " + item.to);
      });
    }
  }
};
