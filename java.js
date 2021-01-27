var pantstype = prompt ('what pantsstyle you want ') ;

console.log(pantstype);

alert('welcome')

if(pantstype == "skinny"){
    document.write('<h3>' +'welcome to skinny pants page' +'</h3>' );
}else if(pantstype == "straight"){
    document.write( '<h3>' +'welcome to straight pants page' + '</h3>');
}else if (pantstype == "bermuda" ){
    document.write('<h3>'+'welcom to bermuda pants page'+'</h3>');
}else{
    alert('No pants page are found !');

}
