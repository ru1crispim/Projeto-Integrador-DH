function toggleMode(){
    const checkbox = document.querySelector("#change-mode");
    const isChecked = checkbox.checked;
    if(isChecked){
        document.body.classList.add("dark-mode");
        storageTheme("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
        storageTheme("white-mode");
    }
}

function storageTheme(theme){
    localStorage.setItem("@testando:theme", theme);
}

function getStorageTheme(){
    const storage = localStorage.getItem("@testando:theme");

    return storage
}

window.onload = function(){
    const theme = getStorageTheme();
    if(theme === "dark-mode"){
        const checkbox = document.querySelector("#change-mode");
        checkbox.checked = true;
        toggleMode()
    }
}