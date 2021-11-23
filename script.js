function check1(){
  var rd1 = document.getElementById("radio1");
  var rd2 = document.getElementById("radio2");
  if(rd1.checked==true){
    var class1 = "1. CSE 3203 Mobile System Overview";
    var class2 = "2. IT 4213 Mobile Web Development";
    var class3 = "3. IT 3223 Hardware and Software Concepts";
    var class4 = "4. IT 3883 Advanced Application Development";
    var class5 = "5. IT 3423 Operating System Concepts and Administration";
    document.getElementById("class1").innerHTML = class1;
    document.getElementById("class2").innerHTML = class2;
    document.getElementById("class3").innerHTML = class3;
    document.getElementById("class4").innerHTML = class4;
    document.getElementById("class5").innerHTML = class5;
    document.getElementById("class5").style.visibility = "visible";
    document.getElementById("grade5").style.visibility = "visible";
    document.getElementById("grades").style.visibility = "visible";
    document.getElementById("ebutton").style.marginTop = "10px";
  }
  else if(rd2.checked==true){
    var class1 = "1. IT 7113 Data Visualization";
    var class2 = "2. IT 6713 Business Intelligence";
    var class3 = "3. IT 7143 Cloud Analytics Technology";
    var class4 = "4. IT 7323 Computer Forensics";
    document.getElementById("class1").innerHTML = class1;
    document.getElementById("class2").innerHTML = class2;
    document.getElementById("class3").innerHTML = class3;
    document.getElementById("class4").innerHTML = class4;
    document.getElementById("class5").style.visibility = "hidden";
    document.getElementById("grade5").style.visibility = "hidden";
    document.getElementById("grades").style.visibility = "visible";
    document.getElementById("ebutton").style.marginTop = "0px";
  }
}
function evaluateform(){
  var rd1 = document.getElementById("radio1");
  var rd2 = document.getElementById("radio2");
  var gpa;
  var totalpoints=0;
  var grade1; var grade2; var grade3; var grade4; var grade5;
  var grade1num=0; var grade2num=0; var grade3num=0; var grade4num=0; var grade5num=0;

  if(rd1.checked==true){
    grade1=document.getElementById("grade1").value;
    if(grade1=="A"){
      grade1num=4;
    } else if(grade1=="B"){
      grade1num=3;
    } else if(grade1=="C"){
      grade1num=2;
    } else if(grade1=="D"){
      grade1num=1;
    } else{
      grade1num=0;
    }
    grade2=document.getElementById("grade2").value;
    if(grade2=="A"){
      grade2num=4;
    } else if(grade2=="B"){
      grade2num=3;
    } else if(grade2=="C"){
      grade2num=2;
    } else if(grade2=="D"){
      grade2num=1;
    } else{
      grade2num=0;
    }
    grade3=document.getElementById("grade3").value;
    if(grade3=="A"){
      grade3num=4;
    } else if(grade3=="B"){
      grade3num=3;
    } else if(grade3=="C"){
      grade3num=2;
    } else if(grade3=="D"){
      grade3num=1;
    } else{
      grade3num=0;
    }
    grade4=document.getElementById("grade4").value;
    if(grade4=="A"){
      grade4num=4;
    } else if(grade4=="B"){
      grade4num=3;
    } else if(grade4=="C"){
      grade4num=2;
    } else if(grade4=="D"){
      grade4num=1;
    } else{
      grade4num=0;
    }
    grade5=document.getElementById("grade5").value;
    if(grade5=="A"){
      grade5num=4;
    } else if(grade5=="B"){
      grade5num=3;
    } else if(grade5=="C"){
      grade5num=2;
    } else if(grade5=="D"){
      grade5num=1;
    } else{
      grade5num=0;
    }
    totalpoints = grade1num+grade2num+grade3num+grade4num+grade5num;
    gpa = totalpoints/5;
    if(gpa>3.2){
      passed(gpa);
    } else{
      failed(gpa);
    }
  }
  if(rd2.checked==true){
    grade1=document.getElementById("grade1").value;
    if(grade1=="A"){
      grade1num=4;
    } else if(grade1=="B"){
      grade1num=3;
    } else if(grade1=="C"){
      grade1num=2;
    } else if(grade1=="D"){
      grade1num=1;
    } else{
      grade1num=0;
    }
    grade2=document.getElementById("grade2").value;
    if(grade2=="A"){
      grade2num=4;
    } else if(grade2=="B"){
      grade2num=3;
    } else if(grade2=="C"){
      grade2num=2;
    } else if(grade2=="D"){
      grade2num=1;
    } else{
      grade2num=0;
    }
    grade3=document.getElementById("grade3").value;
    if(grade3=="A"){
      grade3num=4;
    } else if(grade3=="B"){
      grade3num=3;
    } else if(grade3=="C"){
      grade3num=2;
    } else if(grade3=="D"){
      grade3num=1;
    } else{
      grade3num=0;
    }
    grade4=document.getElementById("grade4").value;
    if(grade4=="A"){
      grade4num=4;
    } else if(grade4=="B"){
      grade4num=3;
    } else if(grade4=="C"){
      grade4num=2;
    } else if(grade4=="D"){
      grade4num=1;
    } else{
      grade4num=0;
    }
    totalpoints = grade1num+grade2num+grade3num+grade4num;
    gpa = totalpoints/4;
    if(gpa>3.7){
      passed(gpa);
    } else{
      failed(gpa);
    }
  }
}
function passed(gpa){
  var message="Congratulations, based on your "+gpa.toFixed(1)+" gpa you are elligble to apply. Please click on the link below to open the application form.";
  document.getElementById("result").innerHTML=message;
  document.getElementById("alink").style.visibility = "visible";
}
function failed(gpa){
  var message="Sorry based on your "+gpa.toFixed(1)+" gpa you are not elligble to apply. Please try again next semester.";
  document.getElementById("result").innerHTML=message;
}
function congrats(){
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var fullname= fname+" "+lname;
  var fmessage= fullname+" thank you for applying today!"
  document.getElementById("formed").innerHTML=fmessage;
}




