var nb=parseInt(prompt("Saisir un nombre impair"));
var reponse;

if(nb%2==0) //on regarde si nb est divisible par 2
    {
        document.write("Veuillez saisir un nombre impair"); //si divisible par2, ce n'est pas un impair  
    }
    else
    {
        for(var index=nb;index>0;index-=2) //on init l'index au chiffre saisi et on décrémente l'index de 2 à chaque fois tant que index est supérieur à 0
        document.write("&nbsp"+index+"&nbsp");   
    }
