// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';

Meteor.methods({
  'links.insert'(link) {
    check(link.url, String);
    check(link.title, String);
     
    link.createdAt = new Date();

    return Links.insert(link);

  },
});
