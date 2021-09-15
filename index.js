let counter = 0;

function addDog(){
    image = document.getElementsByTagName("IMG")[0];
    parent = document.getElementsByTagName("P")[0];
    if ( counter < 12 ){
        parent.appendChild(image.cloneNode(true));
    } else if ( counter >= 12  && counter < 24 ) {
        parent.removeChild(image);
    } 
    
    if ( counter == 23 ) {
        counter = 0;
    }
    counter ++;
}