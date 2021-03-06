/**
 * Génère un objet représentant un compteur en utilisant les fermetures de Javascript.
 * À partir d'une valeur initiale, chaque appel à la fonction incrémenter
 * cette valeur et la renvoie.
 *
 * @example
 * const Compteur=genererCompteur(1) // Renvoie une fonction
 * Compteur() // Renvoie 2
 * Compteur() // Renvoie 3
 */
const genererCompteur = function(x) {
    let acc=x;
    function incr(){
        acc=acc+1;
        return acc
    }
    return incr;
 }

/**
 * Retourne un object Javascript qui contient en clé les lettres de la châine
 * de caractères et leur occurrence en valeur.
 *
 * Notions: Regex Javascript,
 *
 * @example
 * charCounts('laval') // Renvoie { l: 2, a: 2, v: 1 }
 *
 * @param {string} str - Chaîne de caractère
 * @returns {Object<string, number>}
 */
const charCounts = function (str) {
    str = str.toLowerCase();
    const arr = str.split("");
    const obj = {};
    arr.map(function(value){
        const regExp = new RegExp(value);
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        if (regExp.test(alphabet)){
            if (value in obj){
                obj[value]+=1;
            }
            else{
                obj[value]= 1;
            }
        }
    })
    return obj;
}

/**
 * Retourne un entier qui représente le nombre de jours restants jusqu'au prochain jour de Noël.
 *
 * Notions: Manipulation de Date
 *
 * @param {Date} date - Objet de Date
 * @returns {number} Nombre de jours jusqu'à Noël prochain.
 */
const daysToChristmas = function (date) {
    const noel = new Date(date.getFullYear(),11,25);
    if (noel-date==0){
        return 0;
    }
    else if(noel-date>0){
        return Math.trunc((noel-date)/(1000*60*60*24)+1);
    }
    else{
        const newYear = new Date(date.getFullYear() + 1,0,1);
        return Math.trunc((newYear-date)/(1000*60*60*24)+358);
    }
}

/**
 * Renvoie un tableau sans éléments dupliqués.
 *
 * Notions: Manipulation de tableaux (reduce)
 *    console.log(predicate);
 * @example
 * distinct([1, 2, 2, 3, 1]) // Renvoie [1, 2, 3]
 *
 * @param {Array} arr - Tableau avec potentiellement des éléments dupliqués
 * @returns {Array} Tableau sans éléments dupliqués
 */
const distinct = function (arr) {
    const new_arr = [];
    arr.map(function(value,index,array){
        if (new_arr.find(x => x==value)==undefined){
            new_arr.push(value);
        }
    });
    return new_arr;
}

/**
 * Renvoie un tableau qui contient les clés partagées entre deux objets Javascript.
 *
 * Notions: Manipulation objet (Object.keys()) et tableaux
 *
 * @example
 * commonKeys({ x: 1, y: 2}, { x: 2, z: 4 }) // Renvoie [x]
 *
 * @param {Object} obj1 - Premi    console.log(predicate);er objet
 * @param {Object} obj2 - Deuxième objet
 * @returns {Array} Tableau qui contient les cléfs partagées entre deux objets
 */
const commonKeys = function(obj1,obj2){
    const arr = Object.keys(obj1);
    const share_keys = [];
    arr.map(function(value){
        if(value in obj2 && share_keys.find(x=>x==value)==undefined){
            share_keys.push(value);
        }
    })
    return share_keys;
}

/**
 * Renvoie un tableau trié selon le champ 'author' d'un objet. Si deux objets
 * ont la même valeur dans l'attribut 'author', alors on compare la valeur
 * de l'attribut 'title'.
 *
 * Notion: Trie de tableaux avec .sort(comparator)
 * @param {Array} arr - Tableau à trié
 * @param {Boolean} asc - True si on trie en ordre croissant. False pour décroissant
 * @returns {Array} Tableau trié
 */
const sortByAuthorAndTitle = function(arr,asc){
    if(asc==undefined){
        asc=true;
    }
    const arr_sorted=arr.sort(function(x,y){
        const xAuthor = x.author.toLowerCase();
        const yAuthor = y.author.toLowerCase();
        const xTitle = x.title.toLowerCase();
        const yTitle = y.title.toLowerCase();
        if(xAuthor<yAuthor){
            return -1;
        }
        if(xAuthor>yAuthor){
            return 1;
        }
        if(xTitle<yTitle){
            return -1;
        }
        if(xTitle>yTitle){
            return 1;
        }
        return O;
    });
    if(asc){
        return arr_sorted;
    }
    else{
        return arr_sorted.reverse();
    }
}

/**
 * Convertit une fonction de trois paramètre non-currifiée vers une fonction currifiée de 3 paramètres.
 *
 * Notions: Fonctions lambda
 *
 * @example
 * const sum = (x, y, z) => x + y + z
 * sum(10, 5, 3) // Renvoie 18
 *
 * sumCurried(10)(5)(3) // Renvoie 18
 *
 * const sumCurried = curry3(sum) // Prend la fonction sum non currifié en paramètre et la convertit vers une version currifiée.
 * //Ensuite on peut appeler partiellement la fonction sumCurried.
 * sumCurriedOne = sumCurried(1) // Retourne une fonction de 2 paramètres qui fait la somme entre 1 + y + z
 * sumCurriedThree = sumCurriedOne(2) // Retourne une fonction de 1 paramètre qui fait la somme entre 1 + 2 + z
 * sumCurriedThree(3) // Retourne le résultat de 1 + 2 + 3, donc 6.
 *
 * @param {Function} fun - Fonction à currifier
 * @param {any} x - 1re paramètre
 * @param {any} y - 2e paramètre
 * @param {any} z - 3e paramètre
 * @returns {Function} Fonction currifiée
 */


const curry3=fun=>x=>y=>z=>fun(x,y,z)

/**
 * Applique une fonction de rappel sur chaque élément d'un tableau et retourne
 * le tableau transformé.
 * Cette fonction existe déjà, mais réimplémentez la.
 *
 * Notions: Manipulation de tableaux, récursivité
 *
 * @example
 * map([1,2,3], x => x * 2) // renvoie [2,4,6]
 * @example
 * map([1,2,3], x => x + '' + x) // renvoie ['11', '22', '33']
 *
 * @param {Array} arr
 * @param callback - Fonction de rappel
 * @returns {Array}
 */
function map(arr, callback) {
  if (arr.length!=0){
    return [callback(arr[0])].concat(map(arr.slice(1),callback))
  }
  else {
    return []
  }
}

/**
 * Applique un prédicat sur chaque élément d'un tableau et renvoie le premier
 * éléments qui satisfait le prédicat. Sinon, renvoie null.
 * Cette fonction existe déjà, mais réimplémentez la.
 *
 * Notions: Manipulation de tableaux, récursivité
 *
 * @example
 * find([1,4,3], x => x > 2) // renvoie 4
 * @example
 * find([1,4,3], x => x > 5) // renvoie null
 *
 * @param {Array} arr
 * @param callback - Fonction de rappel
 * @returns {Array}
 */
function find(arr, predicate) {
    if(arr.length==0){
        return null;
    }
    if(predicate(arr[0])){
        return arr[0];
    }
    return find(arr.slice(1),predicate);
}

/**
 * Cette fonction de rappel prend un accumulateur et une valeur de tableau en entrée et renvoie
 * un nouveau accumulateur.
 *
 * @callback foldCallback
 * @template S
 * @param {S} acc - Accumulateur
 * @template T
 * @param {T} x - Valeur d'un tableau
 * @returns {S} Accumulateur
 */

/**
 * Applique une fonction de rappel à partir d'un accumulateur, initialisé au
 * départ, et chaque élément d'un tableau et retourne l'accumulateur final.
 *
 * Notions: Manipulation de tableaux, récursivité
 *
 * @example
 * fold([1,2,3,4,5], 0, (acc, x) => acc + x) // renvoie 15
 * @example
 * fold([1,2,3], [], (acc, x) => [...acc, x ** 2]) // renvoie [1,4,9]
 *
 * @template T
 * @param {Array<T>} arr
 * @template S
 * @param {S} init - Valeur initiale de l'accumulateur
 * @param {foldCallback} op - Fonction de rappel qui prend un accumulateur et un
 * élément du tableau en paramètre.
 * @returns {S} Accumulateur
 */

function fold(arr, init, op) {
    if(arr.length>0){
        return  fold(arr.slice(1),op(init,arr[0]), op);
    }
    return init;
}

/**
 * Classe Employee représentée par trois attributs: id, name, salary. Nous
 * pouvons accéder aux trois attributs, mais seulement 'name' peut être
 * modifié.
 *
 * Il existe une méthode toString() qui permet d'afficher une représentation
 * en chaîne de caractères de l'objet.
 *
 * @example
 * const e = new Employee(1, 'Konstantinos', 50000)
 * e.toString() // Renvoie 'Employee name=Konstantinos,salary=50000
 */
class Employee {
  
  constructor(id,name,salary){
    this._id=id
    this._salary=salary
    this._name=name    
  }

  toString() {
    return "Employee name="+this._name +",salary="+this._salary
  }

  get id(){
    return this._id
  }
  get salary(){
    return this._salary
  }
  get name(){
    return this._name
  }
  set name(name){
    this._name=name
  }
}

/**
 * Classe Chercheur représentée par 4 attributs: id, name, salary, bonus.
 * Elle hérite de Employee. L'attribut 'bonus' ne peut être accéder ni
 * modifié.
 *
 * Surcharger la méthode toString() pour ajouter l'attribut bonus.
 *
 * @example
 * const e = new Chercheur(1, 'Konstantinos', 50000, 10)
 * e.toString() // Renvoie 'Employee name=Konstantinos,salary=50000,bonus=10
 */
class Chercheur extends Employee{
  constructor(id,name,salary,bonus){
    super(id,name,salary)
    this._bonus=bonus
  }

  toString(Employee) {
    return "Employee name="+this._name +",salary="+this._salary+",bonus="+this._bonus
  }
}

export {
  genererCompteur,
  charCounts,
  daysToChristmas,
  distinct,
  commonKeys,
  sortByAuthorAndTitle,
  curry3,
  map,
  find,
  fold,
  Employee,
  Chercheur
}
