var getBtn1 = $("#get_btn_1")
var getBtn2 = $("#get_btn_2")
var getBtn3 = $("#get_btn_3")
var dateText = $("#date_text")
var removeBtn = $("#remove_btn")

getBtn1.on('click', () => {
    dateText.html(new Date())
})

getBtn2.on('click', () => {
    let d = new Date();
    dateText.html((d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear())
})

getBtn3.on('click', () => {
    let d = new Date();
    dateText.html(d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear())
})

removeBtn.on('click', () => {
    dateText.html("")
})
