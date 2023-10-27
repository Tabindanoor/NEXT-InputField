

const getGender = async(name:string)=>{
    const res = await fetch(`https://api.agify.io?name=${name}`);
    const myData = await fetch("https://dummyjson.com/products")
    

    console.log(myData.json());
    
    console.log(res)
}



    
const page = ({params}:any) => {

console.log(params.name,"name")
  return (
    <div>
      tabinda noor is here 
    </div>
  )
}

export default page
