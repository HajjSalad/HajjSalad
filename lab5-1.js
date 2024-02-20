document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("mainForm").onsubmit = function(e){
        var fieldValue1=document.getElementsByName("title")[0].value;
        var fieldValue2=document.getElementsByName("description")[0].value;
        var fieldValue3=document.getElementsByName("accept")[0];
        if(fieldValue1==null || fieldValue1==""){
            e.preventDefault();
            alert("Please enter the title");
            var titleBackground = document.getElementsByName("title")[0];
            titleBackground.style.backgroundColor = "rgb(240, 205, 205)";
        }
        else if(fieldValue2==null || fieldValue2==""){
            e.preventDefault();
            alert("Please enter the description");
            var descriptionBackground = document.getElementsByName("description")[0];
            descriptionBackground.style.backgroundColor = "rgb(240, 205, 205)";
        }
        else if(fieldValue3.type=="checkbox"){
            if(fieldValue3.checked){
            }
            else{
                e.preventDefault();
                alert("Please accept the software license")
                var licenseBackground = document.getElementsByClassName("rectangle")[0];
                licenseBackground.style.backgroundColor = "rgb(240, 205, 205)";
            }
        }
    }
    document.getElementsByName('title')[0].oninput = function() {
        var titleBackground2 = document.getElementsByName("title")[0];
        titleBackground2.style.backgroundColor = "";
    };
    document.getElementsByName('description')[0].oninput = function() {
        var descriptionBackground2 = document.getElementsByName("description")[0];
        descriptionBackground2.style.backgroundColor = "";
    };
    document.getElementsByName('accept')[0].onchange = function() {
        var acceptBackground2 = document.getElementsByClassName("rectangle")[0];
        acceptBackground2.style.backgroundColor = "";
    };
});
