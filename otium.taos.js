var Otium = {};
Otium.Taos = {};

Otium.Taos.Map = function()
{
	this.keys = [];
	this.attribute = [];
	this.Add = function(_key, _value)
	{
		this.attribute[_key] = _value;
	};
};

Otium.Taos.InputForm = function()
{
	this.id = "";
	this.setID = function(_id)
	{
		this.id = _id;
	};
	
	this.tagName = "";
	this.SetTextName = function(_tagName)
	{
		this.tagName = _tagName;
	};

	this.Render = function()
	{
		var output = "";
		
		return output;
	};
	
};

Otium.Taos.TextBox.prototype = new Otium.Taos.InputForm();
Otium.Taos.TextBox = function()
{
	var text = "";
	this.SetText = function(value)
	{
		text = value;
	};
	this.GetText = function()
	{
		return text;
	};
	this.SetOnChange = function(value)
	{
		onchange = value;
	};
	
};

