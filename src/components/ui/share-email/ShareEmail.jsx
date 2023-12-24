import { useState } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import styles from './ShareEmail.module.scss';

const ShareEmail = () => {
	const { theme } = useTheme();
	const [inputValue, setInputValue] = useState('');

	return (
		<div className={styles.wrapper}>
			<button className={styles.exit}>
				<img
					src={
						theme
							? '../images/icons/exit_edit_black.svg'
							: '../images/icons/exit_edit.svg'
					}
					alt='img'
				/>
			</button>
			<h2>Поделиться новостью</h2>
			<div className={styles.block__input}>
				<label htmlFor='share'>Введите почту получателя</label>
				<input
					type='text'
					id='share'
					value={inputValue}
					onChange={event => setInputValue(event.target.value)}
				/>
			</div>
			<div className={styles.block__buttons}>
				<button>оТМЕНИТЬ</button>
				<a href={'mailto:' + inputValue}>dfsf</a>
			</div>
		</div>
	); //TODO: СДЕЛАТЬ ОТПРАВКУ НА ПОЧТУ
};

export default ShareEmail;
