const componentHello = () => {
  return <div>Hello</div>;
};

export default (text = "Hello world, it's me!!") => {
  const element = document.createElement("div");
  const header = document.createElement("h1");
  componentHello();

  header.innerHTML = text;
  element.appendChild(header);

  return element;
};
