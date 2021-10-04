var nbMise = 0;
$('#numMise').val(nbMise);

function init(btn){
    btn.style.display="none";
    i=1;
    nbr=0;
    choix=new Array();
    creerGrille();
 }
 function creerGrille(){  //Creer le tableau de 20 cases
    t=setTimeout("creerGrille()",50);
    bouton=document.createElement("div");
    bouton.className="bouton";
    bouton.innerHTML=i;
    bouton.setAttribute("id",i);
    bouton.onclick=function(){
       ajouter(this);
    }
    document.getElementById("tableauGrilleA").appendChild(bouton);
    if(i%5==0){ // Le diviser par 5 colonnes et 4 lignes
       br=document.createElement("br");
       document.getElementById("tableauGrilleA").appendChild(br);
    }
    i+=1;
    
    if(i>20)
       clearTimeout(t);

      
       
 }
 
 function ajouter(ob){
    if(nbr<8){ //Ajouter les bouton du tableaux
       ob.style.visibility="hidden";
       nbouton=document.createElement("div");
       nbouton.className="nbouton";
       nbouton.setAttribute("id","ch"+nbr);
       nbouton.innerHTML=ob.textContent;
       document.getElementById("choix").appendChild(nbouton);
       choix[nbr]=ob.firstChild.nodeValue;
       nbr+=1;
       if(nbr==8)
          ztirage();
    }
 }
 j=0;
 function ztirage(){
   
    setTimeout("ztirage()",100);
    if(j<8){ //Les tirage des 8 chiffres
       zbouton=document.createElement("div");
       zbouton.className="zbouton";
       zbouton.innerHTML=0;
       zbouton.setAttribute("id","resultat"+j);
       document.getElementById("resultat").appendChild(zbouton);
       j+=1;
       if(j==8){
          document.getElementById("bon").style.visibility="visible";
          document.getElementById("btnEtoile").style.visibility="visible";
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
 var itr=20;
 function tirage(){ //les mettre sur le cote
    tx=setTimeout("tirage()",40);
    rep+=1;
    if(rep<itr){
       for(k=index+1;k<8;k++)
          document.getElementById("resultat"+k).innerHTML=Math.ceil(Math.random()*20);

       v=Math.ceil(Math.random()*20);
       document.getElementById("resultat"+index).innerHTML=v;
       if(rep==itr-1){
          if(tab.indexOf(v)==-1){
             tab[index]=v;
             for(k=0;k<8;k++){
                if(document.getElementById("ch"+k).firstChild.data==tab[index]){
                   document.getElementById("ch"+k).style.backgroundColor="#48C";
                   document.getElementById("resultat"+index).style.backgroundColor="#48C";
                   document.getElementById("ch"+k).style.color="#FFF";
                   document.getElementById("resultat"+index).style.color="#FFF";
                   document.getElementById("bon").innerHTML=parseInt(document.getElementById("bon").textContent)+1;
                    
                 /*   for(nbMise=0; nbMise<3; nbMise++)
                    {
                      nbMise= nbMise*1;
                      $('#numMise').val(nbMise);
                    }
                    for(nbMise=0; 4<nbMise<5; nbMise++)
                    {
                        nbMise= nbMise*4;
                        $('#numMise').val(nbMise);
                    }
                    for(nbMise=0; 5<nbMise<6; nbMise++)
                    {
                        nbMise= nbMise*5;
                        $('#numMise').val(nbMise);
                    }
                    for(nbMise=0; 6<nbMise<7; nbMise++)
                    {
                        nbMise= nbMise*6;
                        $('#numMise').val(nbMise);
                    }
                    for(nbMise=0; 7<nbMise<8; nbMise++)
                    {
                        nbMise= nbMise*7;
                        $('#numMise').val(nbMise);
                    }
                    for(nbMise=0; nbMise=8; nbMise++)
                    {
                        nbMise= nbMise*8;
                        $('#numMise').val(nbMise);
                    }*/
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
       if(index==8){
          clearTimeout(tx);
          return false;
       }
    }
 }









/*

function CreerTableau1()
{
    temps1=setTimeout("CreerTableau1()", 50);
    btn2=document.createElement("div");
    btn2.className='btn2';
    btn2.innerHTML=i2;
    btn2.setAttribute("id", i2);
    btn2.onclick=function()
    {
        AjouterBouton1(this);
    }
    document.getElementById("tableauGrilleB").appendChild(btn2);
    if(i2%4==0)
    {
        br=document.createElement("br");
        document.getElementById("tableauGrilleB").appendChild(br);

    }
    i2+=1;
    if(i2>4)
    clearTimeout(temps1);
}
function AjouterBouton1(obtn1)
{
    if(nb1<1)
    {
        obtn1.style.visibility="hidden";
        nbtn1=document.createElement("div");
        nbtn1.className="nbtn1";
        nbtn1.setAttribute("id","chx1"+nb1);
        nbtn1.innerHTML=obtn1.textContent;
        document.getElementById("choix1").appendChild(nbtn1);
        choix1[nb1]=obtn1.firstChild.nodeValue;
        nb1+=1;
        if(nb1==1)
        {
            TirageAleatoire1();
        }
    }
}
j1=0;
function TirageAleatoire1()
{
    setTimeout("TirageAleatoire1()", 100);
    if(j1<1)
    {
        btnTirage1=document.createElement("div");
        btnTirage1.className="btnTirage1";
        btnTirage1.innerHTML=0;
        btnTirage1.setAttribute("id", "resultat1"+j1);
        document.getElementById("resultat1").appendChild(btnTirage1);
        j1+=1;
        if(j1==1)
        {
            document.getElementById("bon").style.visibility="visible";
                 Tirage1();
        }
    }
}
index1=0;
rep1=0;
tab1=new Array();
itr=4;
function Tirage1(){
   tx=setTimeout("Tirage1()",40);
   rep1+=1;
   if(rep1<itr){
      for(k=index+1;k<1;k++)
         document.getElementById("resultat"+k).innerHTML=Math.ceil(Math.random()*49);

      v=Math.ceil(Math.random()*4);
      document.getElementById("resultat"+index1).innerHTML=v;
      if(rep1==itr-1){
         if(tab1.indexOf(v)==-1){
            tab1[index1]=v;
            for(k=0;k<1;k++){
               if(document.getElementById("chx"+k).firstChild.data==tab1[index1]){
                  document.getElementById("chx"+k).style.backgroundColor="#48C";
                  document.getElementById("resultat"+index1).style.backgroundColor="#48C";
                  document.getElementById("chx"+k).style.color="#FFF";
                  document.getElementById("resultat"+index1).style.color="#FFF";
                  document.getElementById("bon").innerHTML=parseInt(document.getElementById("bon").textContent)+1;
                
               }
            }
         }
         
         else
            rep1=itr-2;
      }
   }
   else{
      rep1=0;
      index1+=1;
      if(index1==1){
         clearTimeout(tx);
         return false;
      }
    }
}*/