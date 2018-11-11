import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './links.html';

Template.Links_Page.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.Links_Page.helpers({
  links() {
    return Links.find({});
  },
});

Template.Links_Page.events({
  'submit .info-link-add'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;
    const groups = target.groups;

    let newlink = {title: title.value , url: url.value , groups: groups.value}
    

    Meteor.call('links.insert', newlink , (error) => {
    if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
        groups.value = "";
      }
    });
  },
});
