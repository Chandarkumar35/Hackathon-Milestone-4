"use strict";
window.addEventListener("load", () => {
    let Name = localStorage.getItem('Name');
    let Desination = localStorage.getItem('Desination');
    let Phone = localStorage.getItem('Phone');
    let email = localStorage.getItem('email');
    let Address = localStorage.getItem('Address');
    let Pass = localStorage.getItem('Pass');
    let Degree = localStorage.getItem('Degree');
    let Uni = localStorage.getItem('Uni');
    let Pass2 = localStorage.getItem('Pass2');
    let Degree2 = localStorage.getItem('Degree2');
    let Uni2 = localStorage.getItem('Uni2');
    let skill1 = localStorage.getItem('skill1');
    let skill2 = localStorage.getItem('skill2');
    let skill3 = localStorage.getItem('skill3');
    let lang1 = localStorage.getItem('lang1');
    let lang2 = localStorage.getItem('lang2');
    let styear = localStorage.getItem('styear');
    let endyear = localStorage.getItem('endyear');
    let Company = localStorage.getItem('Company');
    let Complocation = localStorage.getItem('Complocation');
    let jobtitle = localStorage.getItem('jobtitle');
    let achv1 = localStorage.getItem('achv1');
    let achv2 = localStorage.getItem('achv2');
    let achv3 = localStorage.getItem('achv3');
    let picture = localStorage.getItem('Profile_pic');
    let resName = document.getElementById('resName');
    resName.textContent = Name;
    let resDes = document.getElementById('resDes');
    resDes.textContent = Desination;
    let resPhone = document.getElementById('resPhone');
    resPhone.textContent = Phone;
    let resEmail = document.getElementById('resEmail');
    resEmail.textContent = email;
    let resAddress = document.getElementById('resAddress');
    resAddress.textContent = Address;
    let resPass = document.getElementById('resPass');
    resPass.textContent = Pass;
    let resDegree = document.getElementById('resDegree');
    resDegree.textContent = Degree2;
    let resUni = document.getElementById('resUni');
    resUni.textContent = Uni;
    let resPass2 = document.getElementById('resPass2');
    resPass2.textContent = Pass2;
    let resDegree2 = document.getElementById('resDegree2');
    resDegree2.textContent = Degree2;
    let resUni2 = document.getElementById('resUni2');
    resUni2.textContent = Uni2;
    let reskill1 = document.getElementById('reskill1');
    reskill1.textContent = skill1;
    let reskill2 = document.getElementById('reskill2');
    reskill2.textContent = skill2;
    let reskill3 = document.getElementById('reskill2');
    reskill3.textContent = skill3;
    let resLang1 = document.getElementById('resLang1');
    resLang1.textContent = lang1;
    let resLang2 = document.getElementById('resLang2');
    resLang2.textContent = lang2;
    let resStartYear = document.getElementById('resStartYear');
    resStartYear.textContent = styear;
    let resEndYear = document.getElementById('resEndYear');
    resEndYear.textContent = endyear;
    let resCompany = document.getElementById('resCompany');
    resCompany.textContent = Company;
    let resComplocation = document.getElementById('resComplocation');
    resComplocation.textContent = Complocation;
    let resJobtitle = document.getElementById('resJobtitle');
    resJobtitle.textContent = jobtitle;
    let resAchv1 = document.getElementById('resAchv1');
    resAchv1.textContent = achv1;
    let resAchv2 = document.getElementById('resAchv2');
    resAchv2.textContent = achv2;
    let resAchv3 = document.getElementById('resAchv3');
    resAchv3.textContent = achv3;
    let respic = document.getElementById('respic');
    respic.textContent = picture;
});
// // ............Ref-btn..............
// let ref_section = document.getElementById('ref');
// let btn = document.getElementById('btn');
// btn!.addEventListener('click',()=>{
//     ref_section!.classList.toggle('hide')
// })
// // ............Edu-btn..............
// let exp_section = document.getElementById('experiences');
// let btn5 = document.getElementById('btn5');
// btn5?.addEventListener('click',()=>{
//     exp_section!.classList.toggle('hide')
// })
let btn6 = document.getElementById('btn6');
btn6?.addEventListener('click', () => {
    window.print();
});
// '''''''''''''''''edit button...............
let btn7 = document.getElementById('btn7');
btn7?.addEventListener('click', () => {
    window.history.back();
});
