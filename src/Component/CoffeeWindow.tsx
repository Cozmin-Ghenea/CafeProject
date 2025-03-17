import "./CoffeeWindow.scss";

interface coffee {
  image: string;
  title: string;
  desc: string;
}

export function CoffeeWindow({ image, title, desc }: coffee) {
  return (
    <div className="Coffee-window">
      <img className="Coffee-image" src={image} alt="Coffee Image"></img>
      <h1 className="Coffee-title">{title}</h1>
      <p className="Coffee-description">{desc}</p>
    </div>
  );
}
