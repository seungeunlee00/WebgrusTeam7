var ans = document.getElementsByClassName("answer");

function handleClick(event) {
    
    if(event.target.classList[1] === "clicked") {
        event.target.classList.remove("clicked");
    } else {
        for(var i =0;i<ans.length; i++) {
            ans[i].classList.remove("clicked");
        }

        event.target.classList.add("clicked");
    }
}


    for(var i = 0; i < ans.length; i++) {
        ans[i].addEventListener("click", handleClick);
    }

    