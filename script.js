document.addEventListener("DOMContentLoaded", function () {
    
    const tabButtons = document.querySelectorAll(".tab-btn");
    
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
          
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(tab => tab.classList.remove("active"));

        
            this.classList.add("active");

           
            const tabId = this.getAttribute("onclick").match(/'(.+?)'/)[1];
            document.getElementById(tabId).classList.add("active");
        });
    });
});



