function darkMode() {
    document.getElementById('darkmode').innerHTML = 'light';
    
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.850)"; 
    let items = document.querySelectorAll(".text");
 
    items.forEach(item => {
        item.style.color = "white";
    });
    document.getElementById("logo").src='./img/logowhite.svg';
    document.getElementById('lightmode').style.display= "inline-block";
    document.getElementById('darkmode').style.display= "none";
    
    
}

function lightMode() {
    document.getElementById('darkmode').innerHTML = 'dark';
    document.body.style.backgroundColor = "#f5deb365";
    let items = document.querySelectorAll(".text");
 
    items.forEach(item => {
        item.style.color = "black";
    });
    document.getElementById("logo").src='./img/logo.svg';
    document.getElementById('darkmode').style.display= "inline-block";
    document.getElementById('lightmode').style.display= "none";
    document.getElementById('main').style.background = "#2C3333";
    document.getElementById('lightmode').style.display= "none";
  
}