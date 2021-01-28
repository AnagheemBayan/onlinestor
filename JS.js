var pantstype = prompt ('welcome to pants page , what you want to shope , skinny or straight pants ') ;


 while (pantstype !== 'skinny' && pantstype !== 'straight' );{

    pantstype =  prompt('please write what you want correct  ') ;


 }
 
 var pantinput = prompt ('how many pants collection you want to see')  ;

 alert('welcome');
 var img ='';
for (var i = 0 ; i <pantinput ; i ++) {


if(pantstype == "skinny"){
    document.write('<h3>' +'welcome to skinny pants page' +'</h3>');

    img =  '<img src= "https://n.nordstrommedia.com/id/sr3/31be938f-aba9-406c-ad5f-b5b2bb562c5f.jpeg">';

    document.write(img);
 
    

}else if(pantstype == "straight"){

    document.write( '<h3>' +'welcome to straight pants page' + '</h3>');

    img = '<img src= "https://images.jdmagicbox.com/quickquotes/images_main/b07fxmlky3-w-for-woman-women-s-straight-pants-18auw60193-110692-copper-foil-6-150915567-uqvhb.jpg">';

    document.write(img) ;

}



//document.body.style.background= 'gray';
}

document.body.style.background= 'gray';





