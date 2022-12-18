const targets = document.getElementsByTagName("h2");
Array.prototype.forEach.call(targets, function(item) {
	item.children[1].innerText="見出し";
});
