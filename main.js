function createElement(tagName, attributes, ...children) {
  let e = document.createElement(tagName);
  for (let p in attributes) {
    e.setAttribute(p, attributes[p]);
  }

  for (let child of children) {
    if (typeof child == 'string') {
      child = document.createTextNode(child);
    }
    e.appendChild(child);
  }
  return e;
}

document.body.appendChild(
  <div id="a" name="a">
    <div>abc</div>
    <div></div>
    <div></div>
  </div>
);
