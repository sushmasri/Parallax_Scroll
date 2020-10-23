(function(){
 
    var images=['image01.jpg','image04.jpg','image12.jpg','image22.jpg','image32.jpg','image42.jpg'];
    
    var x = document.querySelectorAll('.Image_c');
    
    for(var index=0;index<x.length;index++)
    {
    let image_show=images[index];
    x[index].style.backgroundImage=`url(images/${image_show})`;
   
}})();

window.addEventListener("scroll",(e)=>{
    var txt_scroll=document.querySelectorAll(".primary_scroll");
    //var frst_scroll=document.querySelectorAll(".Image_c");
   // console.log(frst_scroll);
    //get rate for each image_c class and translate each image
var i;
    
    for(i=0;i<txt_scroll.length;i++){
        var pos=window.scrollY*$(this).txt_scroll[i].dataset.speed;
        console.log(`index:${i}`);
        
       txt_scroll[i].style.transform=`translateY(${pos}px)`;
       console.log(`position:${pos}`);
        console.log(`primary_scroll:${txt_scroll[i]}`)
       // var pos_img=window.scrollY*frst_scroll[i].dataset.rate;
       // console.log(frst_scroll[i].dataset.rate);
       // frst_scroll[i].style.transform=`translateY(${pos_img}px)`;
       // console.log(`position_img:${pos_img}`);
        
       
      
        

    };
});