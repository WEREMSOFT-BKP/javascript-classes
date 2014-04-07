MyClass = {
	name: "nombre",
	initialize: MyClassInitialize,
	printWerem: MyClassPrintWerem
};

function MyClassInitialize()
{
	return $.extend({}, this);
}

function MyClassPrintWerem()
{
	console.log(this.name);
}