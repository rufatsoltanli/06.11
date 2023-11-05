const todo = document.getElementById("todocont")
const search = document.querySelector(".search input")
const add = document.querySelector(".add")
const clear = document.querySelector(".clear")
const list = document.querySelector(".list ol")
const arr = []

add.addEventListener("click", function () {
    let li = document.createElement("li")
    const p = document.createElement("p")
    p.addEventListener("click", function () {
        p.classList.toggle("line")
    })
    p.textContent = (search.value)
    li.append(p)
    list.append(li)
    // console.log(p);
    const deletebtn = document.createElement("button")
    deletebtn.innerHTML = ("delete")
    deletebtn.addEventListener("click", function () {
        li.remove()
    })
    li.append(deletebtn)
    arr.push(li)
    localStorage.setItem("list",li)

    // console.log(list);

}
)

clear.addEventListener("click", function () {
    for (let i = 0; i < arr.length; i++) {
        arr[i].remove()

    }
})