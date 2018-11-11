var require = meteorInstall({"imports":{"ui":{"components":{"hello":{"hello.html":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/hello/hello.html                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.link("./template.hello.js", { "*": "*+" });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.hello.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/hello/template.hello.js                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("hello");
Template["hello"] = new Template("Template.hello", (function() {
  var view = this;
  return [ HTML.Raw("<button>Click Me</button>\n  "), HTML.P("You've pressed the button ", Blaze.View("lookup:counter", function() {
    return Spacebars.mustache(view.lookup("counter"));
  }), " times.") ];
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hello.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/hello/hello.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.link("./hello.html");
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});
Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  }

});
Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  }

});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"info":{"info.html":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/info/info.html                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.link("./template.info.js", { "*": "*+" });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.info.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/info/template.info.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("info");
Template["info"] = new Template("Template.info", (function() {
  var view = this;
  return [ HTML.Raw("<h2>Learn Meteor!</h2>\n  "), HTML.UL("\n    ", HTML.Raw('<li>\n      <form class="info-link-add">\n        <input type="text" name="title" placeholder="Title" required="">\n        <input type="url" name="url" placeholder="Url" required="">\n        <input type="submit" name="submit" value="Add new link">\n      </form>\n    </li>'), "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("links"));
  }, function() {
    return [ "\n      ", HTML.LI(HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("url"));
      },
      target: "_blank"
    }, Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    }))), "\n    " ];
  }), "\n  ") ];
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"info.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/info/info.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let Links;
module.link("/imports/api/links/links.js", {
  Links(v) {
    Links = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
module.link("./info.html");
Template.info.onCreated(function () {
  Meteor.subscribe('links.all');
});
Template.info.helpers({
  links() {
    return Links.find({});
  }

});
Template.info.events({
  'submit .info-link-add'(event) {
    event.preventDefault();
    const target = event.target;
    const title = target.title;
    const url = target.url;
    Meteor.call('links.insert', title.value, url.value, error => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  }

});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"layouts":{"body":{"body.html":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/layouts/body/body.html                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.link("./template.body.js", { "*": "*+" });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.body.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/layouts/body/template.body.js                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("App_body");
Template["App_body"] = new Template("Template.App_body", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      template: Spacebars.call(view.lookup("main"))
    };
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Template.__dynamic);
    });
  });
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"body.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/layouts/body/body.js                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.link("./body.html");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"pages":{"home":{"home.html":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/pages/home/home.html                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.link("./template.home.js", { "*": "*+" });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.home.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/pages/home/template.home.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("App_home");
Template["App_home"] = new Template("Template.App_home", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("hello")), "\n  ", Spacebars.include(view.lookupTemplate("info")) ];
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/pages/home/home.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.link("./home.html");
module.link("../../components/hello/hello.js");
module.link("../../components/info/info.js");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"not-found":{"not-found.html":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/pages/not-found/not-found.html                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.link("./template.not-found.js", { "*": "*+" });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.not-found.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/pages/not-found/template.not-found.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("App_notFound");
Template["App_notFound"] = new Template("Template.App_notFound", (function() {
  var view = this;
  return HTML.Raw('<div id="not-found">\n    <div class="not-found-image">\n      <img src="/img/404.svg" alt="">\n    </div>\n    <div class="not-found-title">\n      <h1>Sorry, that page doesn\'t exist</h1>\n      <a href="/" class="gotohomepage">Go to home</a>\n    </div>\n  </div>');
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"not-found.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/pages/not-found/not-found.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.link("./not-found.html");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"api":{"links":{"links.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/links/links.js                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Links: () => Links
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Links = new Mongo.Collection('links');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"both":{"index.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/both/index.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/client/index.js                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.link("./routes.js");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/client/routes.js                                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter(v) {
    FlowRouter = v;
  }

}, 0);
let BlazeLayout;
module.link("meteor/kadira:blaze-layout", {
  BlazeLayout(v) {
    BlazeLayout = v;
  }

}, 1);
module.link("../../ui/layouts/body/body.js");
module.link("../../ui/pages/home/home.js");
module.link("../../ui/pages/not-found/not-found.js");
// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',

  action() {
    BlazeLayout.render('App_body', {
      main: 'App_home'
    });
  }

});
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', {
      main: 'App_notFound'
    });
  }

};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"client":{"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/main.js                                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.link("/imports/startup/client");
module.link("/imports/startup/both");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".less"
  ]
});

require("/client/main.js");