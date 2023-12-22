import { useTheme } from '../../hooks/useTheme';
import styles from './TitleList.module.scss';

const TitleList = () => {
	const { theme } = useTheme();

	return (
		<div className={styles[theme ? 'block__titles' : 'block__titles-dark']}>
			<h2>Источник</h2>
			<h2>Новость</h2>
			<h2>Редактирование</h2>
			<h2>Теги</h2>
		</div>
	);
};

export default TitleList;
