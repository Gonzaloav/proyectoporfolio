import React,{useState} from 'react';
import retrato from "./img/Inicio/retrato.jpg";
import paisaje from "./img/Inicio/paisaje.jpg";
import fauna from "./img/Inicio/fauna.jpg";
import conceptual from "./img/Inicio/conceptual.jpg";
/** require = es una manera de importar una cosa.       */
const Carouselinicio = (props) => {
    const images = [
        retrato,
        paisaje,
        fauna,
        conceptual,
    ];
    const otraImagen = [];
     // estado para índice seleccionado
    const [selectedIndex, setSelectedIndex] = useState(0);

    // estado para imagenes seleccionadas. De las imágenes quiero la primera.()
    const [selectedImage, setSelectedImage] = useState (images[0]);

    /** Creamos un método para simplificar. 2 parámetros, un index que va a ser un número y dos 
     * una imagen es un strig. 
     * Ponemos una propiedad sin parámetro. (next=true) que nos pregunta 
     * si vas al siguiente o al otro.*/
    
    const selectNewImage = (selectedIndex, images, next = true) => {
        /** En caso de ir adelante comprobamos next ? ( selectedIndex < images.lenth -1)  
         * y si no (:)  unificamos las dos condiciones  */
        const condition = next ? selectedIndex < images.length -1 : selectedIndex > 0;

        /** ¿es next? ¿Se cumple la condición?  Hacemos la condición del sigiente index next.
         * y si no, ponemos la condición del previews (:)
         si no, (:) ¿Se cumple la condición?  
         Es como escribir if(next){if(condition){return selectedIndex +1;}else{return 0}}*/
        const nextIndex =  next ? condition ? selectedIndex +1 : 0
                           : condition ? selectedIndex -1 : images.length -1;
                           
                           setSelectedImage (images[nextIndex]);
                           setSelectedIndex (nextIndex);
                           console.log('nextIndex , selectedIndex ,selectedImage',selectedIndex,nextIndex,selectedImage,setSelectedImage (images[nextIndex]))
    }; 
       
        /**  previous es directamente llamar a  selectNewImage () Pasarle selectedIndex,  
         * conjunto images, y  previous que no es next se le pone false.
         * 
        */
     const previous = () => {   
         selectNewImage (selectedIndex, images, false );
         /*console.log('images: ',images)*/
     }  
     // no se pone false porque voy al siguiente. 
     const next = () => { 
        selectNewImage (selectedIndex, images );
        /*console.log('images: ',images)*/
     }
/** 
    // Método para cambiar a la anterior imagen.Hacia atras.

         Creamos la condición que no pase de la primera     
        const condition = selectedIndex > 0;

         Indice al que voy a ir. Si mi condición se cumple se resta 1. (-1) 
         * En el caso que sea el primero pasamos al último (: images.length -1)     
        const nextIndex = condition ? selectedIndex -1 : images.length -1

         Actualizamos selectores.    
        setSelectedImage (images[nextIndex]);

        Cambiamos nuestro index.     
        setSelectedIndex (nextIndex);

    // método para cambiar a siguiente imagen. Hacia adelante./
    const next = () => {

         Creamos la condición que no pase de la ultima (< images.lenth)
        const condition = selectedIndex < images.length;

         Indice al que voy a ir. Si mi condición se cumple se suma 1. (+1) 
         * En el caso que sea la última pasamos a la primera (: 0) 
        const nextIndex = condition ? selectedIndex +1 : 0;

        setSelectedImage (images[nextIndex]);
        setSelectedIndex (nextIndex);
*/
/*console.log('images[0] : ',images[0])*/
    return <> 
    {/** si se muestra una imagen en pantalla para que voy a cargar las otras.
     * al final ponemso defaul porque es el lugar donde se esta guardando.
     * y un alt que es el nombre de la imagen en caso de que no carge. (19:40)*/} 

        {/*<img height="300px" width="400px" src= {require(`${setSelectedImage}`).default} alt="paisaje" />*/}
        <img height="300px" width="400px" src={selectedImage} alt="paisaje" />
        {/*<img height="300px" width="400px" src= {require(`./img/Inicio/paisaje.jpg`)} alt="paisaje" />*/}
        <button onClick={previous}> {'<'} </button>
        <button onClick={next}> {'>'} </button>
     </>;
    
};
export default Carouselinicio;

   /**  Para ir a un índice exprecífico.
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);*/