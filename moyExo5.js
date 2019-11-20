const Form = document.querySelector('.SchoolForm');
const student_name = document.querySelector('input[name="nom"]');
const student_lastname = document.querySelector('input[name="prenoms"]');
const student_matricule = document.querySelector('input[name="matricule"]');
const student_french_masks = document.querySelector('input[name="notes_francais"]');
const student_english_masks = document.querySelector('input[name="notes_anglais"]');
const student_math_masks = document.querySelector('input[name="notes_mathematiques"]');
const student_pc_masks = document.querySelector('input[name="notes_physique_chimie"]');
const student_svt_masks = document.querySelector('input[name="notes_svt"]');
const student_hist_geo_masks = document.querySelector('input[name="notes_histoire_geo"]');


let students = [];
/* gestin ouverture et fermuture du formulaire */
document.querySelector('.afficheForm').addEventListener('click',()=>{
    Form.style.display = "block";
    Form.style.opacity = '1';
    document.querySelector('.afficheForm').style.display = "none";
    document.querySelector('.removeForm').style.display = "block";
});
document.querySelector('.removeForm').addEventListener('click',()=>{
    Form.style.opacity = '0';
    Form.style.display = "none";
    document.querySelector('.afficheForm').style.display = "block";
    document.querySelector('.removeForm').style.display = "none";
});

/* mes functions */
function convertNotesToFloat(param){
    let Convert = param.split(' ');
    Convert.forEach(el=>{
        Convert[Convert.indexOf(el)] = parseFloat(el);
    });
    return Convert;
}

function resetValue(){
    student_name.value = "";
    student_lastname.value = "";
    student_matricule.value = "";
    student_french_masks.value = "";
    student_english_masks.value = "";
    student_math_masks.value = "";
    student_svt_masks.value = "";
    student_pc_masks.value = "";
    student_hist_geo_masks.value = "";
}

function CalculAllNotesStudents(){
  students.forEach(el=>{
      let moyG = 0;
     el.matieres.forEach(el2=>{
         let notes = 0;
        el2.notes.forEach(el3=>{
            notes += el3;
        });
        el2.moy = notes/el2.notes.length;
        moyG += el2.moy;
     });
     moyG = moyG / el.matieres.length;
     el.moyG = moyG.toFixed(2);
  });
}

function trierStudents(newTriedStudents,array){
    if(array.length === 1){
        newTriedStudents.push(array[0]);
    }else{
        let max = parseFloat(array[0].moyG);
        let indexMax = 0;
        for(let i = 0; i < array.length ; i++){
            if(max <= parseFloat(array[i].moyG)){
                indexMax = i;
                max = parseFloat(array[i].moyG);
            }
        }
        console.log(max);
        console.log(indexMax);
        console.log(array[indexMax]);
        newTriedStudents.push(array[indexMax]);
        console.log(newTriedStudents);
        let firstArray = array;
        let secondArray = array;
        let outputArray = firstArray.splice(0,indexMax).concat(secondArray.splice(indexMax+1,array.length));
        return trierStudents(newTriedStudents,outputArray);
    }
}

function addStudents(e){
    e.preventDefault();
   // Form.addEventListener('submit',(e)=> {
     //   e.preventDefault();
    //});
    let studentObj = {};
    studentObj.name = student_name.value;
    studentObj.lastname = student_lastname.value;
    studentObj.matricule = student_matricule.value;
    let matieres = [];
    matieres.push({name: 'français', notes:convertNotesToFloat(student_french_masks.value),moy:0});
    matieres.push({name: 'anglais', notes:convertNotesToFloat(student_english_masks.value),moy:0});
    matieres.push({name: 'mathématique', notes: convertNotesToFloat(student_math_masks.value),moy:0});
    matieres.push({name: 'physique-chimie',notes: convertNotesToFloat(student_pc_masks.value),moy:0});
    matieres.push({name: 'svt', notes: convertNotesToFloat(student_svt_masks.value),'moy':0});
    matieres.push({name : 'hist_geo',notes : convertNotesToFloat(student_hist_geo_masks.value),moy:0});
    studentObj.matieres = matieres;
    studentObj.moyG = 0;
    students.push(studentObj);
    document.querySelector('.compte_length_students').textContent = students.length+'';
    resetValue();

}

function afficheResultats(){
    if(students.length === 0){
        resultat[5].textContent = "aucun étudiant enregistré";
        resultat[5].style.display = 'block';
        resultat[5].style.opacity = '1';
    }else{
        let newTriedStudents = [];
        let output = "<h1 style='font-size: 20px;text-decoration: underline'>classements</h1>";
        CalculAllNotesStudents();
        trierStudents(newTriedStudents,students);
        for(let i = 0; i < newTriedStudents.length; i++){
            output += "<p class='students'><span class='classment'>"+(i+1)+"</span>  "+ newTriedStudents[i].name+" "+newTriedStudents[i].lastname+" : <span class='moyenne'>"+ newTriedStudents[i].moyG +"</span></p>";
        }
        resultat[5].innerHTML = output;
        resultat[5].style.display = 'block';
        resultat[5].style.opacity = '1';
        let button = document.querySelector('.afficheResultats button');
        button.textContent = "fermer les résultats";
        button.setAttribute('onclick', 'hideResultats()');
        button.style.background = "red";
    }
}

function hideResultats(){
    resultat[5].style.display = 'none';
    let button = document.querySelector('.afficheResultats button');
    button.textContent = "afficher les résultats";
    button.setAttribute('onclick', 'afficheResultats()');
    button.style.background = "green";
}

