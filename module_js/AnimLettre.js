import {
    Util
} from './Util.js'


export class AnimLettre {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {object} lesLettres - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(lesLettres, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
		this.lesLettres = lesLettres;
		this.elmParent = elementParent;
		this.animLettres(this.lesLettres);
		this.fonction = fonction;
    }


    animLettres(lesLettres) {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
	   const tabCouleur = ['#CC231E', '#235E6F' , '#009900', '#34A65F', '#0F8A5F','#F5624D']
		let i = 0
		let elmConteneur = this.creerElement(this.elmParent,'section','','mot')

			for (let uneLettre of lesLettres){

				let elmDiv = this.creerElement(elmConteneur,
					 'div',
					  uneLettre,
					   '');

					   elmDiv.style.animationDelay = (i * 0.5) + "s";
					   elmDiv.style.color = tabCouleur[(i++)%8]
				
			}
      
        /* On garde une référence sur la fonction terminerIntro */
        //let refTerminerIntro = this.terminerIntro.bind(this)
        //elmBouton.addEventListener('mousedown', this.terminerIntro.bind(this))
    }


    creerElement(elmParent, balise, contenu, classCSS) {

        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
		}
		if(classCSS != ''){
			noeud.classList.add(classCSS)
		}
        
        elmParent.appendChild(noeud)
        return noeud
    }

 

}