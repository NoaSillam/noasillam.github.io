var miseDepart = parseInt($('#numMise').val());
var cagnotteRecolter = parseInt($('#cagnotte').val());

function MachineSous()
{
    var miseDepart = parseInt($('#numMise').val());
    var cagnotteRecolter = parseInt($('#cagnotte').val());
    if($('#numMise').val() == "" || miseDepart > cagnotteRecolter || miseDepart < 1)
    {
        alert("Entre une autre valeur");
    }
    else
    {
        $('#centre ul').playSpin({
            onFinish : function()
            {
                CalculerCagnotte();
            }

        });
    }
}

function CalculerCagnotte()
{
   /* var compter = (s, c) => s.split(c).length - 1;
    var gain = (jeu)=>
    {
        if(compter(jeu, 'image1') == 2 || compter(jeu, 'image2') == 2 || compter(jeu, 'image3') == 2 || compter(jeu, 'image4') == 2 || compter(jeu, 'image5') == 2)
        {
            return 2*miseDepart;
        }
        else
        {
            if(compter(jeu, 'image1') == 3 || compter(jeu, 'image2') == 3 || compter(jeu, 'image3') == 3 || compter(jeu, 'image4') == 3 || compter(jeu, 'image5') == 3)
            {
                return 5*miseDepart;
            }
            else
            {
                if(compter(jeu, 'image1') == 1 || compter(jeu, 'image2') == 1 || compter(jeu, 'image3') == 1 || compter(jeu, 'image4') == 1 || compter(jeu, 'image5') == 1)
                {
                    return -miseDepart;
                }
            }
        }
        

    }*/

    if(($('#case1').css('top')) == ($('#case2').css('top')) && ($('#case2').css('top')) == ($('#case3').css('top')))
    {
        alert("jackpot");
        // $('#cagnotteUtilisateur').val() + parseInt(($('#miseDeUser').val())*5);

        $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#numMise').val()))*5);
    }
    else if(($('#case1').css('top')) == ($('#case2').css('top')) || ($('#case2').css('top')) == ($('#case3').css('top')) || ($('#case1').css('top')) == ($('#case3').css('top')))
    {
        alert("gagnee");
        // $('#cagnotteUtilisateur').val() + parseInt(($('#miseDeUser').val())*2);
        $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#numMise').val()))*2);
    }
    else
    {
        alert("perduu");
        // $('#cagnotteUtilisateur').val() - parseInt(($('#miseDeUser').val()));
        $('#cagnotte').val(parseInt($('#cagnotte').val()) - parseInt(($('#numMise').val())));
    }
}