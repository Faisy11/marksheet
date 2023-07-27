function mark() {
    let inp1= Number (document.getElementById ("tam").value );
    let inp2=Number (document.getElementById ("eng").value );
    let inp3=Number (document.getElementById ("mat").value );
    let inp4=Number (document.getElementById ("sci").value );
    let inp5=Number (document.getElementById ("soc").value );
    
    let tota=document.getElementById("total")
    let tot=inp1+inp2+inp3+inp4+inp5;
    tota.innerHTML=("TOTAL : ")+tot
    let graude=document.getElementById("gra")
    let result=document.getElementById("res")
    let per=document.getElementById("persentage")
    let failed=document.getElementById("fail")
    let heading=document.getElementById("head")
    document.getElementById ("tam").value ="";
    document.getElementById ("eng").value ="";
    document.getElementById ("mat").value ="";
    document.getElementById ("sci").value ="";
    document.getElementById ("soc").value ="";
    

  if(inp1>=35 && inp2>=35 && inp3>=35 && inp4>=35 && inp5>=35){
heading.innerHTML=("YOUR STATUS")
    result.innerHTML=("RESULT : ")+("YOU PASSED");
    per.innerHTML=("PERCENTAGE : ")+(tot/500*100+"%" )

  if(tot>=450){
    graude.innerHTML= ("GRAUDE : ")+("A+");
 }else if(tot>=400){
    graude.innerHTML= ("GRAUDE : ")+("A");
 }else if(tot>=400){
    graude.innerHTML= ("GRAUDE : ")+("B+");
 }else if(tot>=350){
    graude.innerHTML= ("GRAUDE : ")+("B");
 }else if(tot>=300){
    graude.innerHTML= ("GRAUDE : ")+("C");
 }else if(tot>=175){
    graude.innerHTML= ("GRAUDE : ")+("D");
 }
  }else{
    heading.innerHTML=("YOUR STATUS")
    result.innerHTML=("RESULT : ")+("YOU FAILED");
    per.innerHTML=("PERCENTAGE : ")+(tot/500*100+"%" )
  }
    
}