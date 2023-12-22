import { Link } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import styles from './NavigateBar.module.scss';

const NavigateBar = ({ location }) => {
	const { theme } = useTheme();

	return (
		<div className={styles[theme ? 'wrapper' : 'wrapper-dark']}>
			<Link to={'/home'}>Главная</Link>
			<p className={styles[theme ? 'slash' : 'slash-dark']}>/</p>
			{location !== 'later' ? (
				<Link to={'/home/laterRead'}>Читать потом</Link>
			) : (
				<p>Читать потом</p>
			)}
			<p className={styles[theme ? 'slash' : 'slash-dark']}>/</p>
			{location !== 'favorite' ? (
				<Link to={'/home/favorite'}>Мои папки</Link>
			) : (
				<p>Мои папки</p>
			)}
			<p className={styles[theme ? 'slash' : 'slash-dark']}>/</p>
			{location !== 'history' ? (
				<Link to={'/home/history'}>История просмотра</Link>
			) : (
				<p>История просмотра</p>
			)}
		</div>
	);
};

export default NavigateBar;
