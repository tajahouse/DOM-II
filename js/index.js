//Navigation bar
const onHover = event => event.target.style.color = "orange";
const navBar = document.querySelectorAll('a');
navBar.forEach(anchors =>{
    anchors.addEventListener('mouseover', onHover)
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


//propagation
const eventHandler = (event) => { event.stopPropagation() };