import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	position: DS.attr(),
	dateOfBirth: DS.attr(),
	countryOfBirth: DS.attr(),
	nationality: DS.attr(),
	image: DS.attr()
});
