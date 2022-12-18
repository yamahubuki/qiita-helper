const targets = document.getElementsByTagName("h2");
Array.prototype.forEach.call(targets, function(item) {
	item.children[1].innerHTML='<span style="font-size:0">見出し</span>';
});
