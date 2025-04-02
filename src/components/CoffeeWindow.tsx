import "./CoffeeWindow.scss";

interface coffee {
  image: string;
  title: string;
  desc: string;
  className: string;
}

export function CoffeeWindow({ image, title, desc, className }: coffee) {
  return (
    <div className={className}>
      <img className="Coffee-image" src={image} alt="Coffee Image"></img>
      <div className="text-content">
        <h1 className="Coffee-title">{title}</h1>
        <p className="Coffee-description">{desc}</p>
      </div>
    </div>
  );
}
