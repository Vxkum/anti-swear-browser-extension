function replaceText(node) {
  let text = node.nodeValue;
  for (const bad in DEFAULT_REPLACEMENTS) {
    const good = DEFAULT_REPLACEMENTS[bad];
    const re = new RegExp(bad, "gi");
    text = text.replace(re, good);
  }
  node.nodeValue = text;
}

const walker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_TEXT
);

let node;
while (node = walker.nextNode()) {
  replaceText(node);
}
