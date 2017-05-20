var JsSearch = require('js-search');
var RefGuide = require('./RefGuide.json');

const search = new JsSearch.Search('name');

search.addIndex('crisis_line');
search.addIndex('business_line');
search.addIndex('fax');
search.addIndex('tdd');
search.addIndex('insurance');
search.addIndex('fees');
search.addIndex('hours');
search.addIndex('ages');
search.addIndex('website');
search.addIndex('languages');
search.addIndex('address');
search.addIndex('categories');
search.addIndex('description');
search.addIndex('services');
search.addIndex('name (old)');
search.addIndex('email');
search.addIndex('pops_served');
search.addIndex('wheelchair')

search.addDocuments(RefGuide);

export default search;
