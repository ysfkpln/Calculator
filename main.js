let buton = document.getElementsByTagName("button");
let ekran = document.getElementsByClassName("ekran1")[0];
let hesap = document.getElementById("hesapla");
let temiz=document.getElementById("temizle");

for(var i=0;i<16;i++){
    if(i !=12 && i !=14){
        buton[i].addEventListener("click",yazdir)
    }
}

function yazdir(){
        ekran.value=ekran.value + this.value;
}

hesap.addEventListener("click",sonuc);

function sonuc(){
    ekran.value=eval(ekran.value).toFixed(2);
}

temiz.addEventListener("click",clear);
function clear(){
    ekran.value="";
}