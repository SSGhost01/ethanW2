//query selector ile resim klasını alıp resimlere atadık
const resimler = document.querySelectorAll(".resim")


resimler.forEach(panel =>{

//burada addvemlistener ile olay dinleme yapılır buradaki oy tıklama
panel.addEventListener("click", function(){ 
    
    removeActive()
    panel.classList.add("active")
    
        }
    
    )
    

})


 function removeActive ( ) {
    resimler.forEach(panel =>{
        panel.classList.remove("active")
    }
 )}
// panel.addevemtlistener("click",()
