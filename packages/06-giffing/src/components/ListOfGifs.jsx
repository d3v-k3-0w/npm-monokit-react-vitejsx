import '@/assets/css/modules/listofgifs.module.style.css';
import Gif from './Gif';

const ListOfGifs = ({ accGifs }) => {
	return (
		<div className="listOfGifs">
			{/* la key se utiliza para identificar en una lista los elementos que se esta renderizando,
				y cuando lo eliminas algún elemento evita volver a rendizarlo desde el principio (optimización de performance) */}

			{accGifs.map(({ id, url, title }) => (
				<Gif accId={id} accUrl={url} accTitle={title} key={id} />
			))}
		</div>
	);
};

export default ListOfGifs;
