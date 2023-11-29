import data from "./data";
import Image from "./image";

function App() {
//  console.log(data);
// const {photographer, src:{large}}=data
  return (
    <div>
    <Image data={data}/>
    </div>
  );
}

export default App;
