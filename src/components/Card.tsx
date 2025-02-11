import Button from "./Button";

interface CardProps {
  imageSource: string;
  title: string;
  description: string;
}

function Card({ imageSource, title, description }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-60" src={imageSource} alt={title}></img>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p
          className="text-gray-600 mb-4
      "
        >
          {description}
        </p>
        <Button
          text="Ver más"
          variant="secondary"
          onClick={(text) => console.log(text)}
        />
      </div>
    </div>
  );
}

export default Card;
