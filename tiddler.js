//--
//-- Tiddler() object
//--   copied from the TiddlyWiki core.
//--

var Tiddler = function(title)
{
	this.title = title;
	this.text = "";
	this.creator = null;
	this.modifier = null;
	this.created = new Date();
	this.modified = this.created;
	this.links = [];
	this.linksUpdated = false;
	this.tags = [];
	this.fields = {};
	return this;
}

exports.Tiddler = Tiddler;
