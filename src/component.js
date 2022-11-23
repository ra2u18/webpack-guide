export default (text = "Hello world, it's me!!") => {
  const element = document.createElement("div");
  const header = document.createElement("h1");

  header.innerHTML = text;
  element.appendChild(header);

  return element;
};
