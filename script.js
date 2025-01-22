let hambClick =  false
let navbar = document.querySelector(".navbar")
let secondList = document.querySelector(".secondList")
let grid9 = document.querySelector(".grid9")
let arr = [];
let clicked = false;
let k = 0;
let hamB = document.querySelector(".hamburgerIcon")
for (let index = 1; index < 9; index++) {
    let grid = document.querySelector(`.grid${index}`)
    grid.addEventListener("click", () => {
        grid.style.backgroundColor = "red"
        arr.push(`${grid.classList[1]}`)
        grid.classList.add("gridAnimate")
        setTimeout(() => {

            grid.classList.remove("gridAnimate")
        }, 900);
        // grid.style.transitionProperty = "backgroundColor"
        // grid.style.transitionDuration = "2s"
        console.log(arr)

    })


}


grid9.addEventListener("click", () => {
    clicked = true;
    setInterval(() => {
        if (clicked == true && arr.length > 0) {

            let gridRestore = document.querySelector(`.${arr[k]}`)
            gridRestore.classList.add("gridAnimate2")
            setTimeout(() => {
                
                gridRestore.classList.remove("gridAnimate2")
                gridRestore.style.backgroundColor = "#00407A"
            },1500);
            arr.shift()

        }
        else {

            clicked = false;
        }


    }, 1000);



})

hamB.addEventListener("click",()=>{
    if(hambClick == false){
    hamB.src = "https://png.pngtree.com/element_our/20190601/ourmid/pngtree-gray-cross-icon-free-illustration-image_1338616.jpg"
    hambClick = true; 
    navbar.classList.add("extNav")
    navbar.classList.remove("compNav") 
    setTimeout(() => {
        
        secondList.style.display = "block"
    }, 300);
    

    
    
}
else{
    hamB.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACNCAMAAAC9gAmXAAAAVFBMVEX///8jHyAAAAAGAAC9vL3Ew8TIyMjZ2Nn8/PwXEhPn5+fOzc2Pjo7j4+MgHB0KAACGhIWvrq9fXV6VlJRJRkfv7++enZ0bFxhRTk5/fX41MjMOAQehNmRPAAAAsElEQVR4nO3abU5CMRAF0NIqxfcEBNTnx/73yRqYZJIxnrOCm0n7o9PbGgAAAADwXyxPGdZYmNee4+cYCDPHaZfi/HZ4PM2l54TZvVwDaWbfctKMyGza7bePBP19CYRp7ficYY1MBgAAgLC5z7B+hMJ8bjkv36/Iy3f2pI3J+I5sTEZOmOjGpNJsap2bYncKAACAoFL/4aW6ArV6FMU6JqX6N7W6ScV6WwAAAADAH3YHxzIWvd+RDLoAAAAASUVORK5CYII="
    hambClick = false;
    navbar.classList.add("compNav")   
    navbar.classList.remove("extNav")
    secondList.style.display = "none"  
    }

})



