import Picture from "../components/Picture";
import data from "../helper/data"

const Homepage = () => {
    console.log(data);
    // const {src, photographer}=data
  return (
    <div>
      {data.map((item,index)=>(
     
        <div key={index}>
             <Picture img={item.src}/>
          <h3>{item.photographer}</h3>
        </div>


      )
      
      
      
      )}
    </div>
  )
}

export default Homepage