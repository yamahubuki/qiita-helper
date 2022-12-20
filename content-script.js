let targets = document.getElementsByTagName("h1");
Array.prototype.forEach.call(targets, function(item) {
	if (item.childElementCount > 1) {
		item.children[1].innerHTML='<span style="font-size:0">見出し</span>';
	}
});

targets = document.getElementsByTagName("h2");
Array.prototype.forEach.call(targets, function(item) {
	item.children[1].innerHTML='<span style="font-size:0">見出し</span>';
});
