import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

//++ agregamos una prop `alt` para proporcionar texto alternativo para la imagen
const Img = ({ src, className, alt = '' }) => {
	/*
		Img es un componente que envuelve LazyLoadImage para implementar la carga perezosa de imágenes,
		mejorando el rendimiento de la aplicación. También aplica un efecto de desenfoque durante la carga de la imagen.
	*/
	return (
		<LazyLoadImage
			src={src}
			className={className || ''}
			effect="blur"
			alt={alt}></LazyLoadImage>
	);
};

export default Img;
