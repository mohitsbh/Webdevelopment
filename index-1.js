const item = document.querySelector('#item')
const todobox = document.querySelector('#to-do-box')

item.addEventListener(
    "keyup",
    function (event) {
        if(event.key=="Enter"){
            addtodo(this.value)
            this.value=""
        }

    }
)
const addtodo=(item)=>{
    const ListItem = document.createElement("li");
    ListItem.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>
    `;

    ListItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")

        }
    )

    ListItem.querySelector("i").addEventListener(
        "click",
        function(){
ListItem.remove()
        }
    )
    todobox.appendChild(ListItem)
}