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


var listArea = document.getElementById("text_area");
var btn = document.getElementById("btn");
var result = document.getElementById("resultat");


btn.addEventListener("click", function(){
    var text = listArea.Value;    
    
    result.innerHTML = text;
})


