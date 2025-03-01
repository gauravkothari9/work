const api = 'https://dummyjson.com/pucts';

const readdata = async()=>{
    try{
        const response = await fetch(api);
    console.log(response);
}
    catch(error){
        console.log(error)
    }
};

readdata();

fetch(api)
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error)
});