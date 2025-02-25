import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";

function App() {
  const handleClick = (text: string) => {
    console.log("Click" + text);
  };

  return (
    <div className="bg-gray-200 flex flex-col items-center p-4">
      <h1 className="text-3xl">Biblioteca de componentes</h1>
      <div className="flex justify-center space-x-4 mt-4">
        <Button text="Click Me!!!!" onClick={handleClick} />
        <Button text="Cuidador!" onClick={handleClick} variant="secondary" />
        <Button text="PANIC!!" onClick={handleClick} variant="danger" />
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <Input
          label="Email"
          placeholder="Email"
          type="email"
          onChange={(value) => {
            console.log(value);
          }}
          errorMessage="Error en el email"
          hasError={true}
        />

        <Input
          label="Name"
          placeholder="enter your name"
          type="text"
          onChange={(value) => {
            console.log(value);
          }}
        />

        <Input
          label="Padssword"
          placeholder="enter your password"
          type="password"
          onChange={(value) => {
            console.log(value);
          }}
          isDisabled={true}
        />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4 bg-gray-300">
        <Card
          imageSource="http://picsum.photos/300/400?random=1"
          title="Perico de los palotes"
          description="Perico de los palotes es un loro muy bonito"
        />
        <Card
          imageSource="http://picsum.photos/300/400?random=3"
          title="Perico de los palotes"
          description="Perico de los palotes es un loro muy bonito"
        />
        <Card
          imageSource="http://picsum.photos/300/400?random=15"
          title="Perico de los palotes"
          description="Perico de los palotes es un loro muy bonito"
        />
        <Card
          imageSource="http://picsum.photos/300/400?random=8"
          title="Perico de los palotes"
          description="Perico de los palotes es un loro muy bonito"
        />
        <Card
          imageSource="http://picsum.photos/300/400?random=4"
          title="Perico de los palotes"
          description="Perico de los palotes es un loro muy bonito"
        />
        <Card
          imageSource="http://picsum.photos/300/400?random=3"
          title="Perico de los palotes"
          description="Perico de los palotes es un loro muy bonito"
        />

        <Card
          imageSource="http://picsum.photos/300/400?random=10"
          title="Perico de los palotes"
          description="Perico de los palotes es un loro muy bonito"
        />
      </div>
    </div>
  );
}

export default App;
