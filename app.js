async function getImages(){
    try{
        const input = document.querySelector("input")
            const val = input.value;
                const responce = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${val}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
                    const gif = responce.data.data[0].images.original.url;
            input.value = "";
        createImage(gif);
    }catch(e){
        alert(e.message)
    }
}

function createImage(val){
    const i = val.indexOf("?");
        const IMG = document.createElement('img');
            const collection = document.querySelector("#collection");
            val = val.slice(0,i);
        IMG.src = val;
    collection.append(IMG);
}

function removeImages(){
    const images = document.querySelectorAll('img');
    for(let image of images){
        image.remove();
    }
}

const btn1 = document.querySelector("#search");
const btn2 = document.querySelector("#remove");

btn1.addEventListener("click", getImages);
btn2.addEventListener("click", removeImages);