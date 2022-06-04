const firebaseConfig = {
  apiKey: "AIzaSyDu1-zSt6w36jVc4EaL9TEP5CPT6ORcu8A",
  authDomain: "sufi-footwear-83f9b.firebaseapp.com",
  projectId: "sufi-footwear-83f9b",
  storageBucket: "sufi-footwear-83f9b.appspot.com",
  messagingSenderId: "167177925965",
  appId: "1:167177925965:web:f2fcc94c2d4e8c87c3b304"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log(app)
function getit(){
  var registername = document.getElementById('registername').value
  var registeremail = document.getElementById('registeremail').value
  var registerpass = document.getElementById('registerpass').value
app.database().ref('/').child('registerdata').push({Username : registername ,Email : registeremail, Password : registerpass})
}
function getlog(){
  var signupname = document.getElementById('signupname').value
  var signuppass = document.getElementById('signuppass').value
app.database().ref('/').child('logindata').push({Username : signupname , Password : signuppass})
}

// function register(){
//     var registername = document.getElementById('registername')
//     var registeremail = document.getElementById('registeremail')
//     var registerpass = document.getElementById('registerpass')
    
//       app.database().ref('/').child('user').push({Username : registername.value ,Email : reg, Password : registerpass.value})
//       document.getElementById('signupname') = ""
//       document.getElementById('signuppass') = ""
//   }


// function Rsubmit(){
//  var registerdata = {
//     name : registername.value,
//     email : registeremail.value,
//     Password : registerpass.value,
//  }
//  console.log(registerdata)
// }


function menuToggle(){
    var toggleMenu = document.querySelector('.toggleMenu')
    var navigation = document.querySelector('.navigation')

    toggleMenu.classList.toggle("active")
    navigation.classList.toggle("active")

}
function menuToggleblack(){
  var toggleMenu = document.querySelector('.toggleMenublack')
  var navigation = document.querySelector('.navigation')

  toggleMenu.classList.toggle("active")
  navigation.classList.toggle("active")

}