var body=document.querySelector("#body");
var cursor=document.querySelector("#cursor");
body.addEventListener("mousemove",function(details){
    console.log(details.clientX)
    cursor.style.left=details.clientX+"px" ;
    cursor.style.top=details.clientY+"px";
});
document.addEventListener("DOMContentLoaded",function(){
    Papa.parse("data.csv",{
        download:true,
        header:true,
        complete:function(excelData){
            var array=excelData.data;
            console.log(array);
            var i=1;  
            array.forEach(function(curEle) {
                var cimg=document.querySelector("#cimg"+i);
                var title=document.querySelector("#title"+i);
                var desc=document.querySelector("#desc"+i);
                i++;
                console.log(curEle.Image,curEle.Title,curEle.Description);
                cimg.src=curEle.Image;
                title.innerHTML=curEle.Title;
                desc.innerHTML=curEle.Description;
            });          
        }

    });


})