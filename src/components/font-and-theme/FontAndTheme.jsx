import { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './FontAndTheme.module.scss';

const FontAndTheme = () => {
	// const body = document.body;
	// let fontSize = window.getComputedStyle(body).fontSize;
	// function getFontSize(element) {
	// 	var style = window.getComputedStyle(element, null);
	// 	return parseFloat(style.fontSize);
	// }

	const [valueRange, setValueRange] = useState();

	const { theme, setTheme } = useTheme();

	const handleLightThemeClick = () => {
		setTheme(true);
	};

	const handleDarkThemeClick = () => {
		setTheme(false);
	};

	useEffect(() => {
		if (valueRange <= 4) {
			document.body.style.fontSize = '10px';
		} else if (valueRange <= 8) {
			document.body.style.fontSize = '11px';
		} else if (valueRange <= 12) {
			document.body.style.fontSize = '12px';
		} else if (valueRange <= 16) {
			document.body.style.fontSize = '13px';
		} else if (valueRange <= 20) {
			document.body.style.fontSize = '14px';
		} else if (valueRange <= 24) {
			document.body.style.fontSize = '15px';
		} else if (valueRange <= 28) {
			document.body.style.fontSize = '16px';
		} else if (valueRange <= 32) {
			document.body.style.fontSize = '17px';
		} else if (valueRange <= 36) {
			document.body.style.fontSize = '18px';
		} else if (valueRange <= 40) {
			document.body.style.fontSize = '19px';
		} else if (valueRange <= 44) {
			document.body.style.fontSize = '20px';
		} else if (valueRange <= 48) {
			document.body.style.fontSize = '21px';
		} else if (valueRange <= 52) {
			document.body.style.fontSize = '22px';
		} else if (valueRange <= 56) {
			document.body.style.fontSize = '23px';
		} else if (valueRange <= 62) {
			document.body.style.fontSize = '24px';
		} else if (valueRange <= 68) {
			document.body.style.fontSize = '25px';
		} else if (valueRange <= 74) {
			document.body.style.fontSize = '26px';
		} else if (valueRange <= 78) {
			document.body.style.fontSize = '27px';
		} else if (valueRange <= 84) {
			document.body.style.fontSize = '28px';
		} else if (valueRange <= 88) {
			document.body.style.fontSize = '29px';
		} else if (valueRange <= 92) {
			document.body.style.fontSize = '30px';
		} else if (valueRange <= 96) {
			document.body.style.fontSize = '31px';
		} else if (valueRange <= 100) {
			document.body.style.fontSize = '32px';
		}
	}, [valueRange]);

	return (
		<div className={styles[theme ? 'wrapper' : 'wrapper-dark']}>
			<div className={styles.block__title}>
				<img
					src={
						theme
							? '../images/icons/Text.svg'
							: '../images/icons/Text_white.svg'
					}
					alt='image'
				/>
				<h2>Размер букв</h2>
			</div>
			<div className={styles.block__range}>
				<div className={styles.block__fonts}>
					<p>10</p>
					<p>32</p>
				</div>
				<input
					type='range'
					value={valueRange}
					onChange={event => setValueRange(event.target.value)}
				/>
			</div>
			<div className={styles.block__images}>
				<button onClick={handleLightThemeClick}>
					<img
						src={
							theme
								? '../images/icons/lightTheme.svg'
								: '../images/icons/lightTheme_white.svg'
						}
						alt='image'
					/>
				</button>
				<button onClick={handleDarkThemeClick}>
					<img
						src={
							theme
								? '../images/icons/darkTheme.svg'
								: '../images/icons/darkTheme_white.svg'
						}
						alt='image'
					/>
				</button>
			</div>
		</div>
	);
};

export default FontAndTheme;
