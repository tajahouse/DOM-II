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
})