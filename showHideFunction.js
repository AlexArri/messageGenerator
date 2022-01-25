
function removeAll(){
    document.getElementById("myItemList").innerHTML = "";
}

function ShowAndHide() {
    var x = document.getElementById('hiddenTable');
    if (x.style.display == 'none') {
        x.style.display = 'block';
        removeAll();
    } else {
        x.style.display = 'none';
        removeAll();
    }
    
}


//script pulled from:
//script source: https://html-shark.com/HTML/ShowHideSections.htm
//author: Michael Pilgaard.