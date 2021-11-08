function init(btn){
   btn.style.display="none";
   i=1;
   nbr=0;
   choix=new Array();
   creerGrille();
} 
function creerGrille(){ //creer un tableau 
   t=setTimeout("creerGrille()",50);
   bouton=document.createElement("div");
   bouton.className="bouton";
   bouton.innerHTML=i;
   bouton.setAttribute("id",i);
   bouton.onclick=function(){
      ajouter(this);
   }
   document.getElementById("tableauGrilleA").appendChild(bouton);
   if(i%4==0){//de 4 colonnes et de 1 ligne
      br=document.createElement("br");
      document.getElementById("tableauGrilleA").appendChild(br);
   }
   i+=1;
   
   if(i>4) 
      clearTimeout(t);

     
      
}

function ajouter(ob){
   if(nbr<1){ //creer des boutons et mettre des chiffres
      ob.style.visibility="hidden";
      nbouton=document.createElement("div");
      nbouton.className="nbouton";
      nbouton.setAttribute("id","ch"+nbr);
      nbouton.innerHTML=ob.textContent;
      document.getElementById("choix").appendChild(nbouton);
      choix[nbr]=ob.firstChild.nodeValue;
      nbr+=1;
      if(nbr==1)
         ztirage();
   }
}
j=0;
function ztirage(){//tirage aleatoires de 1 chiffre
  
   setTimeout("ztirage()",100);
   if(j<1){
      zbouton=document.createElement("div");
      zbouton.className="zbouton";
      zbouton.innerHTML=0;
      zbouton.setAttribute("id","resultat"+j);
      document.getElementById("resultat").appendChild(zbouton);
      j+=1;
      if(j==1){
         document.getElementById("bon").style.visibility="visible";
         document.getElementById("btnNouvellePartie").style.visibility="visible";
        /* document.getElementById("jeu1").style.visibility="visible";
         document.getElementById("tableauGrilleB").style.visibility="visible";*/
        tirage();
      }
   }
   

}
var index=0;
var rep=0;
tab=new Array();
var itr=4;
function tirage(){
   tx=setTimeout("tirage()",40);
   rep+=1;
   if(rep<itr){
      for(k=index+1;k<1;k++)
         document.getElementById("resultat"+k).innerHTML=Math.ceil(Math.random()*4);

      v=Math.ceil(Math.random()*4);
      document.getElementById("resultat"+index).innerHTML=v;
      if(rep==itr-1){
         if(tab.indexOf(v)==-1){
            tab[index]=v;
            for(k=0;k<1;k++){
               if(document.getElementById("ch"+k).firstChild.data==tab[index]){
                  document.getElementById("ch"+k).style.backgroundColor="#48C";
                  document.getElementById("resultat"+index).style.backgroundColor="#48C";
                  document.getElementById("ch"+k).style.color="#FFF";
                  document.getElementById("resultat"+index).style.color="#FFF";
                  document.getElementById("bon").innerHTML=parseInt(document.getElementById("bon").textContent)+1;
               }
            }
         }
         else
            rep=itr-2;
      }
   }
   else{
      rep=0;
      index+=1;
      if(index==1){
         clearTimeout(tx);
         return false;
      }
   }
}





