




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