window.onload=function(){

function imageSuivante() {    
    var image=document.getElementById("image");
    // récupération de l'élément img
    var image = document.getElementById("image");
    // récupération de l'attribut
    //var attribut = image.src;
    var attribut = image.getAttribute("src");
    if(imageName<14){
        imageName++;
        attribut = "img/" + imageName + ".jpg";
        console.log(attribut);
        // modification de l'attribut
        image.setAttribute("src", attribut);
        //Changement d'image
        console.log(imageName);
        imageNumber.innerHTML=imageName+" /14";
    } else{
        imageName=1;
        attribut = "img/" + imageName + ".jpg";
        console.log(attribut);
        // modification de l'attribut
        image.setAttribute("src", attribut);
        imageNumber.innerHTML=imageName+" /14";
    }
    
}
function imagePrecedante() {
        var image=document.getElementById("image");
    // récupération de l'élément img
    var image = document.getElementById("image");
    // récupération de l'attribut
    var attribut = image.getAttribute("src");
    if(imageName>1){
        imageName--;
        attribut = "img/" + imageName + ".jpg";
        console.log(attribut);
        // modification de l'attribut
        image.setAttribute("src", attribut);
        //Changement d'image
        console.log(imageName);
        imageNumber.innerHTML=imageName+" /14";
    } else{
        imageName=14;
        attribut = "img/" + imageName + ".jpg";
        console.log(attribut);
        // modification de l'attribut
        image.setAttribute("src", attribut);
        imageNumber.innerHTML=imageName+" /14";
    }


} 

var chevronLeft= document.getElementById("left");
var chevronRight = document.getElementById("right");
var image=document.getElementById("image");
var imageName=1;
var imageNumber=document.getElementById("imageNumber");

chevronLeft.onclick=imagePrecedante;
chevronRight.onclick=imageSuivante;
image.onclick=imageSuivante;

console.log("Test");
console.log(chevronLeft);
console.log(chevronRight);
console.log(image);
};