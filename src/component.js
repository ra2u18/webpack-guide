export default (text = "Hello world, it's me!!") => {
  const element = document.createElement("div");
  element.innerHTML = text;

  return element;
};
