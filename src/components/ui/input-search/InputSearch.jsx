import { useFilter } from '../../../hooks/useFilter';
import { useSearchTerm } from '../../../hooks/useSearchTerm';
import { useTheme } from '../../../hooks/useTheme';
import styles from './InputSearch.module.scss';

const InputSearch = ({ filter, header }) => {
	const { searchTerm, setSearchTerm } = useSearchTerm();
	const { setIsViewFilter } = useFilter();
	const { theme } = useTheme();

	return (
		<div className={styles.block__header_settings}>
			{filter === 'yes' && (
				<button
					className={styles[theme ? 'button__filtr' : 'button__filtr-dark']}
					onClick={() => setIsViewFilter(true)}
				>
					<img src='../images/icons/filtr.svg' alt='img' />
					Фильтры
				</button>
			)}
			<div className={styles[theme ? 'block__search' : 'block__search-dark']}>
				<img
					className={styles.search__image}
					src={
						theme
							? '../images/icons/search.svg'
							: '../images/icons/search_white.svg'
					}
					alt='search'
				/>
				<input
					className={styles[theme ? 'search' : 'search-dark']}
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
