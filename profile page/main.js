// const Dark = document.cookie
//   .split('; ')
//   .find((row) => row.startsWith('Dark='))
//   ?.split('=')[1];
const MYID = 124245

var r = document.querySelector(':root');

const Dark = localStorage.getItem("Dark");

const L = localStorage.getItem("lang");
window.onload = function(){   
  

  document.getElementById("inner_tokens").innerHTML=MYID  //document.getElementById("menu_addressssAndClose").src==""

  X = false
  if(L=='ar'){
    translate(L,'lng-tag');  
    document.body.dir="rtl" 
    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    X = true; 
    document.getElementsByClassName('p-image')[0].style.marginLeft='0px';
    document.getElementsByClassName('p-image')[0].style.marginRight='-38px';
  }else if(L==null){
    translate('en','lng-tag'); 
    document.body.dir="ltr" 
    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    X = true; 
    document.getElementsByClassName('p-image')[0].style.marginRight='0px';
    document.getElementsByClassName('p-image')[0].style.marginLeft='-38px';
  }else{
    // translate('en','lng-tag'); 
    translate(L,'lng-tag');  
    document.body.dir="ltr" 
    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    X = true; 
    document.getElementsByClassName('p-image')[0].style.marginRight='0px';
    document.getElementsByClassName('p-image')[0].style.marginLeft='-38px';
  }
    if (Dark=="true") {
    r.style.setProperty('--TitleParbackground-color', 'black');
    r.style.setProperty('--ATitleParbackground-color', 'black');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)');
    r.style.setProperty('--Apartment', '#151515');
    r.style.setProperty('--FontColor', 'white');
    // r.style.setProperty('--IconColor','blue');
    r.style.setProperty('--menu','black');
    r.style.setProperty('--BodyBackground','gray');
    r.style.setProperty('--PreloaderBackground','black');
    document.getElementById("SAMSARLYLOGOo").src="../imgs/dd.jpg"

  } else {
    r.style.setProperty('--TitleParbackground-color', '#526DA1');
    r.style.setProperty('--ATitleParbackground-color', '#526DA1');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff)');
    r.style.setProperty('--Apartment', 'white');
    r.style.setProperty('--FontColor', '#526DA1');
    // r.style.setProperty('--IconColor','white');
    r.style.setProperty('--menu','#526DA1');
    r.style.setProperty('--BodyBackground','white');
    r.style.setProperty('--PreloaderBackground','white');
    document.getElementById("SAMSARLYLOGOo").src="../imgs/l.jpg"

  }
  // document.body.style.flexDirection = "column";
  //   document.body.style.alignItems = "center";
    // document.getElementById("PreLoader").style.display="none";
    


    var pic = localStorage.getItem("pic")
   
  if (pic == null) {
        document.getElementsByClassName("profile-pic")[0].src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
        // $('.profile-pic').attr('src', "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg");
        document.getElementById("profilepic").src = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
    }
    else {
      // console.log(pic);
      document.getElementsByClassName("profile-pic")[0].src=pic;
        // $('.profile-pic').attr('src', e.target.result);
      document.getElementById("profilepic").src = pic;
    }

    fetch('../database/profile.json')
  .then(function(response) {
    
  console.log(response)
  
  return response.json();
  
  })
  .then(function(P) {
    profile = P
  

    for (let iz = 0; iz < profile.length; iz++) {
      if (profile[iz].id==MYID) {
        document.getElementById("nam").innerText=profile[iz].name
        document.getElementById("emaill").innerText=profile[iz].email
        document.getElementById("phonenumm").innerText=profile[iz].phone

        break
      }        
    }
  })
    if (X) {
      document.getElementById("PreLoader").style.display="none";//////////////////////////////////////////////////////////////////////////////////////////////
    }
  
  
  }
  
  
  // function previewFile() {
  //   var preview = document.querySelector('img');
  //   var file    = document.querySelector('input[type=file]').files[0];
  //   var reader  = new FileReader();
  
  //   reader.addEventListener("load", function () {
  //     preview.src = reader.result;
  //   }, false);
  
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // }
  //                       $(function() {
  //             $('#profile-image1').on('click', function() {
  //                 $('#profile-image-upload').click();
  //             });
  //         });