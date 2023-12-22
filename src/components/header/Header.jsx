import { useTheme } from '../../hooks/useTheme';
import InputSearch from '../ui/input-search/InputSearch';
import styles from './Header.module.scss';

const Header = ({ search }) => {
	const { theme } = useTheme();

	return (
		<>
			{search !== 'search' ? (
				<div className={styles[theme ? 'wrapper' : 'wrapper-dark']}>
					<img src='../../images/icons/logoHeader.svg' alt='logo' />
				</div>
			) : (
				<div
					className={styles[theme ? 'wrapper__search' : 'wrapper__search-dark']}
				>
					<InputSearch filter='yes' header='yes' />
					<img src='../../images/icons/logoHeader.svg' alt='logo' />
				</div>
			)}
		</>
	);
};

export default Header;
