var getBtn = $("#get_btn")
var dateText = $("#date_text")
var removeBtn = $("#remove_btn")

getBtn.on('click', () => {
    dateText.html(new Date())
})

removeBtn.on('click', () => {
    dateText.html("")
})
