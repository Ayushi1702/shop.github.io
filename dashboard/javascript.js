// DASHBOARD
const sideBar = document.getElementById("sidebar");
const sideDash = document.getElementById("sidedash")
const openSideBarElement = document.getElementById("open-sidebar");
const closeSideBarElement = document.getElementById("close-sidebar");
sideDash.addEventListener("click",()=>{
    sideBar.style.display = "flex"
});
closeSideBarElement.addEventListener("mouseover", function(){
    const confirmElement =  confirm("Select OK to continue closing DAshboard")
    if(confirmElement){
        sideBar.style.display = "none"
    }
    else{
        sideBar.style.display = "flex"
    }
})

// SEARCH BAR
const searchBarElement = document.getElementById("searchBar");
const searchTextElement = document.getElementById("searchText");
const closeSubmitElement = document.getElementById("closeSubmit")
searchBarElement.addEventListener("click", ()=>{
searchTextElement.style.display = "block"
});

closeSubmitElement.addEventListener("click",()=>{
    searchTextElement.style.display = "none"
})




