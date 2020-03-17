//Navigation bar
const onHover = event => event.target.style.color = "orange";
const navBar = document.querySelectorAll('a');
navBar.forEach(anchors =>{
    anchors.addEventListener('mouseover', onHover);

});
navBar.forEach(anchors =>{anchors.addEventListener('mouseleave', (event)=>{event.target.style.color = "black"})});

//styling for h2 content
const hTwo = document.querySelectorAll('h2');
hTwo.forEach(heading =>{
    heading.style.textAlign = "center";
});


//images
//bus pic
const busPic = document.querySelector('.intro img');
busPic.addEventListener('mouseenter', (event)=> {
    event.target.style.border = "2px dashed orange"
});
busPic.addEventListener('mouseleave', (event)=>{
    event.target.style.border = "none";
});

//middle images
const mainImg = document.querySelectorAll('.img-content');
mainImg.forEach(picture =>{
    picture.addEventListener('mouseenter', () => {
        picture.style.transform = "scale(1.2)";
        picture.style.transition = "all 0.3s";})
});
mainImg.forEach(picture =>{
    picture.addEventListener('mouseleave', () => {
        picture.style.transform = "scale(1)";
        picture.style.transition = "all 0.3s";})
});

//bottom img
const bottomPic = document.querySelector('.content-destination img');
bottomPic.addEventListener('mouseenter', () => {
    bottomPic.style.transform = "scale(1.2)";
    bottomPic.style.transition = "all 0.3s"; })
bottomPic.addEventListener('mouseleave', () => {
    bottomPic.style.transform = "scale(1)";
    bottomPic.style.transition = "all 0.3s"; })

//buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn =>{
    btn.addEventListener('dblclick', function (e){
        btn.style.color = 'orange';
        btn.textContent = "Go Here!";
    })
})
buttons.forEach(btn =>{
    btn.addEventListener('mouseleave',(event)=>{
        event.target.style.color = "white";
        event.target.textContent = "Sign Me Up!";
    })
});

buttons.forEach(btn =>{
    btn.addEventListener('mouseenter',(event)=>{
        event.target.style.color = "orange";
    })
});

//Paragraphs

//bottom
const bottom = document.querySelectorAll('.container');
const endSection = document.createElement('bottomSection');
endSection.textContent = "We can Get Away!!!";
bottom[1].appendChild(endSection);
endSection.style.fontSize = "5rem";
endSection.style.paddingLeft = "25%";
endSection.style.marginsRight = "22%";

//bottom Picture
const lastImg = document.getElementsByClassName('lastPic');
lastImg[0].style.paddingLeft = "15%";
lastImg[0].style.paddingTop = "1em";



//propagation
const eventHandler = (event) => { event.stopPropagation() };