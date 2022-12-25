const targetTags = ["h1", "h2", "h3", "h4", "h5", "h6"];

targetTags.forEach(() => {
  replacer(targetTags);
});

function replacer(target) {
  const headers = document.querySelectorAll(target);

  headers.forEach((header) => {
    const a = header.querySelector("a");
    if (a) {
      const headerClone = header.cloneNode(true);
      header.parentNode.replaceChild(a, header);
      a.innerHTML = "";
      headerClone.innerText = header.textContent.replace(/\r?\n/g, "");
      a.appendChild(headerClone);
    }
  });
}