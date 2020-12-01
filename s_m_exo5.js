var taille=parseInt(prompt("Saisir votre taille en cm"));
var poids=parseInt(prompt("Saisir votre poids en Kg"));
var age=parseInt(prompt("Saisir votre âge"));
var genre=parseInt(prompt("Précisez votre genre ( 1 : Homme, 2 : Femme)"));
var metaMoyen=0;
var facteurActivite=0;

//calcul du metabolisme
if(genre==1) //si genre = homme alors 1er calcul, sinon on calcul pour une femme
{
    metaMoyen=((9.99*poids)+(6.25*taille)-(5*age)+5);
    document.write(metaMoyen.toFixed(0)+"<br/>");
    genre=="H";
}
else{
    metaMoyen=((9.99*poids)+(6.25*taille)-(5*age)-161);
    document.write(metaMoyen.toFixed(0)+"<br/>");
    genre=="F";
}

//calcul facteur d'activité
//A ouvrir sous Firefox sinon le menu n'apparait pas tant que le choix n'est pas fait 

document.write("1. Sédentaire (Peu ou pas d'exercice et travail de bureau)"+"<br/>");
document.write("2. Légèrement actif (Exercice ou sport léger 1 à 3 fois par semaine)"+"<br/>");
document.write("3. Modérément actif (Exercice ou sport modéré 3 à 5 fois par semaine)"+"<br/>");
document.write("4. Trés actif (Exercice ou sport intense 6 à 7 fois par semaine)"+"<br/>");
document.write("5. Extrêmement actif (Exercice ou sport quotidien intense et travail physique"+"<br/>");
var activite=prompt("Quel est votre niveau d'activité ?");
switch(activite)
{
    case "1":
        facteurActivite=(metaMoyen*1.2);
        document.write("Facteur Act : "+facteurActivite+"<br/>");
        activite="Sédentaire";
        document.write("Activité : "+activite+"<br/>");
        break;

    case "2":
        facteurActivite=(metaMoyen*1.4);
        document.write("Facteur Act : "+facteurActivite+"<br/>");
        activite="Légèrement actif";
        document.write("Activité : "+activite+"<br/>");
        break;

    case "3":
        facteurActivite=(metaMoyen*1.6);
        document.write("Facteur Act : "+facteurActivite+"<br/>");
        activite="Modérément actif";
        document.write("Activité : "+activite+"<br/>");
        break;

    case "4":
        facteurActivite=(metaMoyen*1.7);
        document.write("Facteur Act : "+facteurActivite+"<br/>");
        activite="Trés actif";
        document.write("Activité : "+activite+"<br/>");
        break;

    case "5":
        facteurActivite=(metaMoyen*1.9);
        document.write("Facteur Act : "+facteurActivite+"<br/>");
        activite="Extrêmement actif";
        document.write("Activité : "+activite+"<br/>");
        break;    
}

document.write("Votre besoin en calories est estimé à "+facteurActivite+" cal");