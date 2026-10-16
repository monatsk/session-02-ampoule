//document.querySelector("#pix el1").style.backgroundColor = "#00806f";
document.querySelector("#pixel2").style.backgroundColor = "#00806f";
document.querySelector("#pixel3").style.backgroundColor = "#00806f";
document.querySelector("#pixel5").style.backgroundColor = "#00806f";       
document.querySelector("#pixel8").style.backgroundColor = "#00806f";

peindre("#pixel1"); 
peindre("#pixel2");     
peindre("#pixel3");
peindre("#pixel5"); 
peindre("#pixel8");



function peindre(pixel) {
    document.querySelector(pixel).style.backgroundColor = "#00806f";
}
