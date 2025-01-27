// let msg = document.querySelector("h1");

// function changeColor(color,delay,nextcolor){
//     setTimeout(()=>{
//         msg.style.color=color;
//         if(nextcolor)nextcolor();
//     },delay)
// }

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000)
//     })
// })


// let url = "https://catfact.ninja/fact";


// *************** PROMISE
// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log("Error : ",err)
// })

//*********ASYNC AWAIT

let click = document.querySelector('#fact');

// *************************fetch
// async function btnClicked(){
//     let res=await fetch(url);
//     let data = await res.json();
//     click.textContent = data.fact;
// }

// ****************************Axios

// async function btnClicked  () {
//     let res1 = await axios.get(url)
//     click.textContent = res1.data.fact;

// }


let url2= "http://universities.hipolabs.com/search?name="
let btn = document.querySelector('#colBtn');

btn.addEventListener("click",async()=>{
    let txt = document.querySelector("#CollegeName").value;
    let colArr = await getCollege(txt);
    showArr(colArr);
    
})

async function showArr(colArr) {
    let ulist = document.querySelector("#list");
    ulist.textContent=""
    for(col of colArr){
        let list = document.createElement("li")
        list.innerText=col.name
        ulist.appendChild(list)
    }   
}

async function getCollege(name){
     try{
        let res=await axios.get(url2+name)
        return res.data;
    }
    catch(e){
        return e;
    }
}



