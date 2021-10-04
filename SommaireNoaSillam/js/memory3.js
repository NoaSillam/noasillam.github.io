$(
    function()
    {

      

var image = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7, 8 ,8 ,9 ,9  ];
var departCarte = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
colonne = 3;
ligne = 4;
var nbEssaie = 0;
$('#nbEssaies').val(nbEssaie);











function Recharger(noCarte)
{
    switch(departCarte[noCarte])
    {
        case 0: //fond de carte
                $('img')[noCarte].src = "../Image/memory3/fondChocolat.jpg";
                $('img')[noCarte].src = "../Image/memory3/fondChocolat.jpg";
                break;
        case 1: //carte retourner
                $('img')[noCarte].src = "../Image/memory3/chocolat"+image[noCarte]+".jpg";
                break;
        case -1: //enlever la paire trouver
                $('img')[noCarte].src = "../Image/memory3/gagner.jpg";
                break;
    }

}
var nbPaires = 0;
var carteRetourne=[];



image.sort(() => Math.random() - 0.5); //Math.random sert a tirer uen carte aleatoirement dans une place precise


for(var i=0; i<$('img').length; i++)
{
    $('img')[i].noCarte=i;
    $('img').click(function ()
{


    if(carteRetourne.length<2)  //Pour ne pas avoir plus de 2 cartes retourner
    {

        if(departCarte[this.noCarte]==0)  // Pour ne rien changer si il n'y a pas carte ni sur la carte est deja retourner
        {
            departCarte[this.noCarte]=1;
            carteRetourne.push(this.noCarte);   //ajouter un ou plusieurs element a la fin d'un tableau et qu'il retourne la nouvelle taille du tableau
            Recharger(this.noCarte);
        }
        //determiner si les carte sont les meme si oui elles prennent la case -1 
        // si non les carte prennet la case 0
        if(carteRetourne.length==2)  //Pour savoir si elle on le meme nombre
        {
            nbEssaie +=1;
            $('#nbEssaies').val(nbEssaie);
            var paireTrouver=0;
            if(image[carteRetourne[0]]==image[carteRetourne[1]])
            {
                paireTrouver=-1;
                nbPaires++;
            }
            departCarte[carteRetourne[0]]=paireTrouver;
            departCarte[carteRetourne[1]]=paireTrouver;
            //on change le temps de l'affichage des cartes quand le jeu est finis on appuit sur le bouton rejouer
            setTimeout(function()
            {
                Recharger(carteRetourne[0]);
                Recharger(carteRetourne[1]);
                carteRetourne=[];
                if(nbPaires==10){
                   NouvellePartie();
               }
            }, 1200);
            
        
    }

    }
}
);
}//mettre un timer de 120 secondes
var timerElt = document.getElementById('timer');
var counter = 120;
var timer = setInterval(function()
{
    console.log(counter);
    timerElt.innerText = counter;
    counter--;
    if(counter === 0)
    {
        setTimeout(function(){
            timerElt.innerText ="Perdu!! Temps impartit terminer";
            console.log("Perdu!! Temps impartit terminer");
            clearInterval(timer);
            Rejouer();
        }, 1000);
    }
}, 1000);

function Rejouer() //recharger la page lorsque la paire est trouver
{
//alert("Gagner !!!!");
location.reload();  //recharger la page depuis l'url
//Gagner();
}
//function Gagner() //recharger la page lorsque la paire est trouver
//{
// alert("Gagner !!!!");

//}
function NouvellePartie()
{
alert("Gagner !!!!");
location.reload();  //recharger la page depuis l'url
}



}
)