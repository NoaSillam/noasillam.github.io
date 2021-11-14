<!--Vue pour la saisie des informations dans un formulaire!-->

<div class="container">

<form name="formAjout" action="" method="post">
  <fieldset>
    <legend>Entrez les donn�es sur la fleur � ajouter </legend>
    <label> R�f�rence : </label> <input type="text" placeholder="Entrer la r�f�rence �"name="ref" size="10" /><br />
    <label>D�signation :</label> <input type="text" name="des" size="20" /><br />
    <label>Prix :</label> <input type="text" name="prix" size="10" /><br />
    <label>Image :</label> <input type="text" name="image" size="20"/><br />    
    <label>Cat�gorie :</label>
    <select name="cat">
       <option selected value = "bul">Bulbes</option>
       <option value = "mas">Plantes � massif</option>
       <option value = "ros">Rosiers</option>
    </select> 
  </fieldset>
  <button type="submit" class="btn btn-primary">Enregistrer</button>
  <button type="reset" class="btn">Annuler</button>
  </p>
</form>
</div>


