var mise = parseInt($('#mise').val());
var cagnotte = parseInt($('#cagnotte').val());

function LancerRoulette()
{
    var mise = parseInt($('#mise').val());
    var cagnotte = parseInt($('#cagnotte').val());

    if( $('#mise').val() === "" || mise > cagnotte || mise < 1)
    {
        alert("Veuillez entrer une valeur correct !");
    }
    else
    {
        $('#roulette ul').playSpin({
            onFinish : function(){
                Calculer();
            }
        });
    }
}

function Calculer()
{

    if(($('#aGauche').css('top')) == ($('#milieu').css('top')) && ($('#milieu').css('top')) == ($('#aDroite').css('top')))
    {
        alert("NON PREND PAS TOUTE MA TUNE");
        // $('#cagnotte').val() + parseInt(($('#miseDeUser').val())*5);

        $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#mise').val()))*5);
    }
    else if(($('#aGauche').css('top')) == ($('#milieu').css('top')) || ($('#milieu').css('top')) == ($('#aDroite').css('top')) || ($('#aGauche').css('top')) == ($('#aDroite').css('top')))
    {
        alert("T'AS EU DE LA CHANCE T'AS GAGNE");
        // $('#cagnotte').val() + parseInt(($('#miseDeUser').val())*2);
        $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#mise').val()))*2);
    }
    else
    {
        alert("T'ES NUL T'AS PERDU");
        // $('#cagnotte').val() - parseInt(($('#miseDeUser').val()));
        $('#cagnotte').val(parseInt($('#cagnotte').val()) - parseInt(($('#mise').val())));
    }
}