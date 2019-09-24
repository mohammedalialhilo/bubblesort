const listar = document.querySelector(".displayOutput");
const sorterad = document.querySelector(".sortedList");
const Maxtal = new Array();

let lista = [Maxtal];
while (Maxtal.length < 1000) {
    Maxtal.push(Math.round(Math.random() * 1000000) + 1);

}
//document.write(Maxtal);

console.log(Maxtal);

function swap(Maxtal, i, j) {
    var temp = Maxtal[i];
    Maxtal[i] = Maxtal[j];
    Maxtal[j] = temp;
}

function bubbleSort(Maxtal) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < Maxtal.length; i++) {
            if (Maxtal[i] && Maxtal[i + 1] && Maxtal[i] > Maxtal[i + 1]) {
                swap(Maxtal, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
    return Maxtal;
}
bubbleSort(Maxtal.slice());

text = "<ul>";
for (i = 0; i < Maxtal.length; i++) {
    text += "<li>" + Maxtal[i] + "</li>";
}
text += "</ul>";

sorterad.innerHTML = text;