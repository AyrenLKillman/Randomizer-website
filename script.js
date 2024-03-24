const tagsEl = document.getElementById("tags")
const textarea = document.getElementById("textarea")

textarea.focus()


// this just says "if person presses a button, then use the function "create tags" with this information
textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value)
// this part just says if person presses enter, then run the randomselect function
    if(e.key === "Enter") {
// code that was removed was the code that deleted the text box's info, this was deleted because its 
//a student picker, and you dont want to type every single student in again after choosing one
        randomSelect()
    }
});
// this makes the span's in the HTML, though it also has a filter to remove unessesary white space
function createTags(input) {
    const tags = input.split(",").filter(tag => tag.trim()
     !== "").map(tag => tag.trim())
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
    })

}
//this just selects a tag and then unselects it until this function ran 30 times, and the tag it stopped on, it will keep the Highlight on it
function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlights(randomTag)
        setTimeout(() => {
            unhighlights(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randTag = pickRandomTag()
            highlights(randTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlights(tag) {
    tag.classList.add("highlight")
}
function unhighlights(tag) {
    tag.classList.remove("highlight")
}