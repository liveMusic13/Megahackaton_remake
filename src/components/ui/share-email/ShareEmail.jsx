import { useState } from 'react';
import { useShareEmail } from '../../../hooks/useShareEmail';
import { useTheme } from '../../../hooks/useTheme';
import styles from './ShareEmail.module.scss';

const ShareEmail = () => {
	const { theme } = useTheme();
	const [inputValue, setInputValue] = useState('');
	const { isShareEmail, setIsShareEmail } = useShareEmail();

	return (
		<div className={styles[theme ? 'wrapper' : 'wrapper-dark']}>
			<button className={styles.exit} onClick={() => setIsShareEmail(false)}>
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
					placeholder='E-mail'
					id='share'
					value={inputValue}
					onChange={event => setInputValue(event.target.value)}
				/>
			</div>
			<div className={styles.block__buttons}>
				<button className={styles.button}>оТМЕНИТЬ</button>
				<a href={'mailto:' + inputValue} className={styles.button__link}>
					отправить
				</a>
			</div>
		</div>
	);
};

export default ShareEmail;
