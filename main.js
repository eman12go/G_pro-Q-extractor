// buttons choose Paragraph
function P_showMe() {
            document.getElementById("p_main").style.display = "flex"
    document.getElementById("D_main").style.display = "none"
    document.getElementById("main_D").style.display = "none"
    document.getElementById("Def_input").style.display = "none"
    document.getElementById("generate").style.display = "none"
    document.getElementById("floatingTextarea").style.display = "none"
    document.getElementById("Results").style.display = "none"
    document.getElementById("section2").style.display = "none"
}
 // buttons choose Defination
function D_showMe() {
    document.getElementById("D_main").style.display = "flex"
    document.getElementById("p_main").style.display = "none"
    document.getElementById("p-input").style.display = "none"
    document.getElementById("Def_input").style.display = "none"
    document.getElementById("generate").style.display = "none"
    document.getElementById("Results").style.display = "none"
    document.getElementById("section2").style.display = "none"
    document.getElementById("floatingTextarea").style.display = "none"
    // document.getElementById("exampleFormControlTextarea1").style.display = "none"
}
// true_func ==> True\False for Defination
function true_func() {
    document.getElementById("p_main").style.display = "none"
    document.getElementById("main_D").style.display = "block"
    document.getElementById("main1_D").style.display = "flex"
    document.getElementById("floatingTextarea").style.display = "none"
    document.getElementById("floatingTextarea").style.display = "none"
    document.getElementById("generate").style.display = "none"
    
}
// mcq_func ==> MCQ for Defination
function mcq_func() {
    document.getElementById("p_main").style.display = "none"
    document.getElementById("p-input").style.display = "none"
    document.getElementById("main_D").style.display = "block"
    document.getElementById("floatingTextarea").style.display = "none" 
    document.getElementById("floatingTextarea").style.display = "none"
    document.getElementById("main1_D").style.display = "flex"
    document.getElementById("generate").style.display = "none"
}
// switch_D==> choose Bulk from Defination_choose
function switch_D() {
    document.getElementById("p_main").style.display = "none"
    document.getElementById("p-input").style.display = "none"
    document.getElementById("floatingTextarea").style.display = "block"
    
    document.getElementById("Def_input").style.display = "none"
    // document.getElementById("generate").style.display = "block"
}
// switch_D==> choose One by One from Defination_choose
function switch_D_one() {
    document.getElementById("p_main").style.display = "none"
    document.getElementById("floatingTextarea").style.display = "none"
    
    document.getElementById("Def_input").style.display = "flex"
    // document.getElementById("generate").style.display = "block"
}
// p_true_func ==> True\False for Paragraph
function p_true_func() {
    
    document.getElementById("p-input").style.display = "block"
    // document.getElementById("generate").style.display = "block"
}
// p_mcq_func ==> MCQ for Paragraph
function p_mcq_func() {
    // document.getElementById("generate").style.display = "block"
    document.getElementById("p-input").style.display = "block"

} 
// generate button ==> display section2 & Results
function gen_showMe(){
    document.getElementById("section2").style.display = "block"
    document.getElementById("Results").style.display = "block"
}
//generate button for paragraph 
let textareaID = document.getElementById('exampleFormControlTextarea1');
let BtnID = document.getElementById('generate');
textareaID.addEventListener('input', function() {
    BtnID.style.display = 'none';
    if (textareaID.value.length) {
        BtnID.style.display = 'inline-block';
    }
});
//generate button for Defination 
let textareaID2 = document.getElementById('floatingTextarea');
let BtnID2 = document.getElementById('generate');
textareaID2.addEventListener('input', function() {
    BtnID2.style.display = 'none';
    if (textareaID2.value.length) {
        BtnID2.style.display = 'inline-block';
    }
});
//generate button for Defination 
let InputID2 = document.getElementById('Def_input2');
InputID2.addEventListener('input', function() {
    BtnID2.style.display = 'none';
    if (InputID2.value.length) {
        BtnID2.style.display = 'inline-block';
    }
});