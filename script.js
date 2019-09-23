// var l = [1, 13, 15, 76, 45, 14, 34, 21, 34];
// var i = 0;

// //AVEC UNE BOUCLE WHILE
// while(i < l.length) {
//     if(l[i] > 10 && l[i] < 20){
//         console.log(l[i], "ok");
//     } else {
//         console.log(l[i], "pas ok");
//     }
//     i++;
// }

// //AVEC UNE BOUCLE FOR
// for (let i = 0; i < l.length; i++) {
//     if(l[i] > 10 && l[i] < 20){
//         console.log(l[i], "ok");
//     } else {
//         console.log(l[i], "pas ok");
//     }
// }


// var listArea = document.getElementById("text_area");
// var btn = document.getElementById("btn");
// var result = document.getElementById("resultat");
// i = 0
// var smiley = [":-)", ":-(", ":D", ":)"];

// btn.addEventListener("click", function () {
//     var text = listArea.value;
//     for (let i = 0; i < smiley.length; i++) {
         
//             text = text.replace(smiley[i], "---");

//     }


//     result.innerHTML = text;
// })

var listArea = document.getElementById("text");
var result = document.getElementById("resultat");

var btn = document.getElementById("btn");

var smileys = [":-)", ";-)", ":-D"];

btn.addEventListener("click", function(){
    var text = listArea.value;

    for (let i = 0; i < smileys.length; i++) {
        while(text.includes(smileys[i])){
            text = text.replace(smileys[i], "---")
        }
    }

    result.innerHTML = text;
})


