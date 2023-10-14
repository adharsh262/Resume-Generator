function addNewField() {
    let btnAddEL=document.getElementById("workAddButton");
    let weobj=document.getElementById("we");

    let newNode=document.createElement("input");
    newNode.classList.add("form-control","WorkExperience","my-1");
    newNode.setAttribute("placeholder","Describe One-by-One");

    weobj.insertBefore(newNode,btnAddEL);


}

function EQaddNewField() {
    let rowEl=document.getElementById("tdbody");
    let courseEL=document.sample.degree.value;
    let instuteEl=document.sample.insitute.value;
    let yearEl=document.sample.year.value;
    
    let trEl=document.createElement('tr');

    let td1=trEl.appendChild(document.createElement('td'));
    let td2=trEl.appendChild(document.createElement('td'));
    let td3=trEl.appendChild(document.createElement('td'));
    td1.innerHTML=courseEL;
    td2.innerHTML=instuteEl;
    td3.innerHTML=yearEl;
    rowEl.appendChild(trEl);
    document.sample.degree.value="";
    document.sample.insitute.value="";
    document.sample.year.value="";

}

function lkaddNewField() {
    let btnAddEL2=document.getElementById("lkAddButton");
    let lkobj=document.getElementById("lk");

    let newNode2=document.createElement("input");
    newNode2.classList.add("form-control","langknown","my-1");
    newNode2.setAttribute("placeholder","Describe One-by-One");

    lkobj.insertBefore(newNode2,btnAddEL2);

}




function generateCv() {



    
let nameEl=document.getElementById("name");
let phoneEl=document.getElementById("number");
let mailEL=document.getElementById("mail");
let nameT=document.getElementById("nameT");
let phoneT=document.getElementById("phoneT");
let emailT=document.getElementById("emailT");
let dobT=document.getElementById("dobT");
let dobEl=document.getElementById("DOB");
let namehead=document.getElementById("name1T");
let addressEl=document.getElementById("address");
let hoobyEl=document.getElementById("hobbies");
let strweakEl=document.getElementById("strwekness");
let AboutmyEl=document.getElementById("About");
let instaEl=document.getElementById("Instagram");
let facebookEl=document.getElementById("Facebook");
let linkedEL=document.getElementById("Linkedin");
let objEl=document.getElementById("objective");

let AddressT=document.getElementById("AddressT");
let hobbiesT=document.getElementById("hobbiesT");
let weaknessT=document.getElementById("swT");
let strT=document.getElementById("sw1T");
let aboutT=document.getElementById("myselfT");
let objT=document.getElementById("objT");
let linkedinT=document.getElementById("linkedinT");
let facebookT=document.getElementById("facebookT");
let instaT=document.getElementById("instaT");
let nameDecEl=document.getElementById("nameDec");

let course10El=document.getElementById("10C");
let institute10El=document.getElementById("10I");
let year10El=document.getElementById("10Y");

let courseinterEl=document.getElementById("interC");
let instituteinterEl=document.getElementById("interI");
let yearinterEl=document.getElementById("interY");

let coursebtechEl=document.getElementById("btechC");
let institutebtechEl=document.getElementById("btechI");
let yearbtechEl=document.getElementById("btechY");

let EdcuationQulD=document.getElementsByClassName("EdcuationQulD");
let EdcuationQulI=document.getElementsByClassName("EdcuationQulI");
let EdcuationQulY=document.getElementsByClassName("EdcuationQulY");

str11="";
for(let e of EdcuationQulD) {
    str11=str11+`<p>${e.value}</p>`;
}



nameT.textContent=nameEl.value;
namehead.textContent=nameEl.value;
phoneT.textContent=phoneEl.value;
emailT.textContent=mailEL.value;
dobT.textContent=dobEl.value;
AddressT.textContent=addressEl.value;
hobbiesT.textContent= hoobyEl.value;
 weaknessT.textContent=strweakEl.value;
 aboutT.textContent=AboutmyEl.value;
 instaT.textContent=instaEl.value;
 facebookT.textContent=facebookEl.value;
 linkedinT.textContent= linkedEL.value;
 objT.textContent=objEl.value;
nameDecEl.textContent=nameEl.value;

let lkobj=document.getElementsByClassName("langknown");
let str="";
for(let e of lkobj) {
    str=str+`<li>${e.value}</li>`;
}
document.getElementById("lkEl").innerHTML=str;

let workExpT=document.getElementById("workET");
let WorkExperienceEl=document.getElementsByClassName("WorkExperience");
str1="";
for(let e of WorkExperienceEl) {
    str1=str1+`<li>${e.value}</li>`;
}
workExpT.innerHTML=str1;

let cvformEl=document.getElementById("cv-form");
cvformEl.classList.add("d-none");
}

function printcv() {
    window.print();
}

