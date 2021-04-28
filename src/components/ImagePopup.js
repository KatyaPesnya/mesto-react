import React from 'react';

function ImagePopup(){
return(
    <section className="overlay overlay_type_preview" aria-label="#">
        <div className="overlay__container overlay__container_type_image">
            <img src="#" alt="#" className="overlay__image"></img>
            <h2 className="overlay__caption"></h2>
            <button type="button" className="overlay__close  overlay__close_type_image"></button>
        </div>
    </section>
)
}
export default ImagePopup;