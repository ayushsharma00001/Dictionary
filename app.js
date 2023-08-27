let input = document.querySelector("input");
let btn = document.querySelector("button");
let result = document.querySelector("div");
let result1 = document.querySelector(".result1");
btn.addEventListener("click",async ()=>{
    let word = input.value;
    let meanarray = await ans(word);
    show(meanarray);
})
function show(data){
    result.innerHTML = "";
    for(el of data){
    let h2 = document.createElement("h2");
    h2.innerHTML = `<b style ="color:orange">Defination =</b> ${el.meanings[0].definitions[0].definition}`
    result.appendChild(h2);
    }
}

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"


async function ans(word){
    try{
        let res = await axios.get(url+word);
        console.log(res);
        return res.data;
    }catch(err){
        alert("Word not found");
    }
}