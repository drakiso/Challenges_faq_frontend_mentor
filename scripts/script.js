"use strict"

let questions = document.querySelectorAll(".question")

questions.forEach(question => {
    let questionText = question.querySelector(".question__text")
    let questionBtns = question.querySelectorAll(".question__btn")
    let text = question.nextElementSibling

    questionText.addEventListener("click", () => {
        // apply hidden on all other elements
        questions.forEach(item => {
            if (item != question) {
                item.nextElementSibling.classList.add("hidden")
                item.children[1].classList.remove("hidden")
                item.children[2].classList.add("hidden")
            }
        })

        questionBtns.forEach(btn => {
            btn.classList.toggle("hidden")
        })

        text.classList.toggle("hidden")
    })

    questionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            questions.forEach(item => {
                if (item != question) {
                    item.nextElementSibling.classList.add("hidden")
                    item.children[1].classList.remove("hidden")
                    item.children[2].classList.add("hidden")
                }
            })
    
            questionBtns.forEach(btn => {
                btn.classList.toggle("hidden")
            })
    
            text.classList.toggle("hidden")
        })
    })
    
})