let tableContainer = document.getElementById("emoji_container");
let search_field = document.getElementById("search_field");

function displayEmoje(searchQuery){

    let filteredEmoji = emojiList.filter((emoji)=>{
        if(searchQuery.length === 0){
            return true;
        }
        if(emoji.description.indexOf(searchQuery)!== -1){
            return true;
        }
        if(emoji.aliases.includes(searchQuery) == true){
            return true;
        }
        if(emoji.tags.includes(searchQuery) == true){
            return true;
        }
    })

    tableContainer.innerHTML = "";

    filteredEmoji.forEach(emoji => {
        let newRow = document.createElement("tr");
        let newEmoji = document.createElement("td");
        let newAliases = document.createElement("td");
        let newDescription = document.createElement("td");

        newDescription.innerText=emoji.description;
        newEmoji.innerText = emoji.emoji;
        newAliases.innerText = emoji.aliases.join(', ');

        newRow.appendChild(newEmoji);
        newRow.appendChild(newAliases);
        newRow.appendChild(newDescription);

        tableContainer.appendChild(newRow);
    });
}

window.addEventListener("load",displayEmoje);
search_field.addEventListener('keyup', function(){
    let searchValue = search_field.value.toLowerCase();
    displayEmoje(searchValue);
})