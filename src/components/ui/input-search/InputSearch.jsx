import { useSearchTerm } from '../../../hooks/useSearchTerm';
import styles from './InputSearch.module.scss';

const InputSearch = ({ filter, header }) => {
	const { searchTerm, setSearchTerm } = useSearchTerm();

	return (
		<div className={styles.block__header_settings}>
			{filter === 'yes' && (
				<button className={styles.button__filtr}>
					<img src='../images/icons/filtr.svg' alt='img' />
					Фильтры
				</button>
			)}
			<div className={styles.block__search}>
				<img
					className={styles.search__image}
					src='../images/icons/search.svg'
					alt='search'
				/>
				<input
					className={styles.search}
					type='text'
					placeholder='Поиск'
					value={searchTerm}
					onChange={event => setSearchTerm(event.target.value)}
				/>
			</div>
			{header === 'yes' && (
				<>
					<button className={styles.image__pars}>
						<img src='../images/icons/stop_pars_white.svg' alt='stop' />
					</button>
					<button className={styles.image__pars}>
						<img src='../images/icons/reload_white.svg' alt='reload' />
					</button>
				</>
			)}
		</div>
	);
};

export default InputSearch;
