import Picture from "../components/Picture";
import data from "../helper/data"
import styleStyle from "../styles/style.module.css" ;




const Homepage = () => {
    console.log(data);
    // const {src, photographer}=data
  return (
    <div>
      {data.map((item,index)=>(
     
        <div key={index} className={styleStyle.container}>
             <Picture img={item.src}/>
             <h3>{item.photographer}</h3>
        </div>


      )
      
      
      
      )}
    </div>
  )
}

export default Homepage