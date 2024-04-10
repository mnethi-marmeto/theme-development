let allCaterogie = document.getElementById('allCaterogies-Condoms');
allCaterogie.style.display = "flex";
function changeValue(val){
console.log(val)
let all = document.querySelectorAll('[id^=allCaterogies]');
all.forEach(each=>{
    each.style.display = "none";
})
let allCaterogies = document.getElementById(`allCaterogies-${val}`);
allCaterogies.style.display = "flex";
}