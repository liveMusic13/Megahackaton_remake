import { useEffect, useState } from 'react';
import styles from './FontAndTheme.module.scss';

const FontAndTheme = () => {
	const [valueRange, setValueRange] = useState();

	useEffect(() => {
		if (valueRange <= 6) {
			document.body.style.fontSize = '16px';
		} else if (valueRange <= 12) {
			document.body.style.fontSize = '17px';
		} else if (valueRange <= 18) {
			document.body.style.fontSize = '18px';
		} else if (valueRange <= 24) {
			document.body.style.fontSize = '19px';
		} else if (valueRange <= 30) {
			document.body.style.fontSize = '20px';
		} else if (valueRange <= 36) {
			document.body.style.fontSize = '21px';
		} else if (valueRange <= 42) {
			document.body.style.fontSize = '22px';
		} else if (valueRange <= 48) {
			document.body.style.fontSize = '23px';
		} else if (valueRange <= 54) {
			document.body.style.fontSize = '24px';
		} else if (valueRange <= 60) {
			document.body.style.fontSize = '25px';
		} else if (valueRange <= 66) {
			document.body.style.fontSize = '26px';
		} else if (valueRange <= 72) {
			document.body.style.fontSize = '27px';
		} else if (valueRange <= 78) {
			document.body.style.fontSize = '28px';
		} else if (valueRange <= 84) {
			document.body.style.fontSize = '29px';
		} else if (valueRange <= 90) {
			document.body.style.fontSize = '30px';
		} else if (valueRange <= 95) {
			document.body.style.fontSize = '31px';
		} else if (valueRange <= 100) {
			document.body.style.fontSize = '32px';
		}
	}, [valueRange]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.block__title}>
				<img src='../images/icons/Text.svg' alt='image' />
				<h2>Размер букв</h2>
			</div>
			<div className={styles.block__range}>
				<div className={styles.block__fonts}>
					<p>16</p>
					<p>32</p>
				</div>
				<input
					type='range'
					value={valueRange}
					onChange={event => setValueRange(event.target.value)}
				/>
			</div>
			<div className={styles.block__images}>
				<button>
					<img src='../images/icons/lightTheme.svg' alt='image' />
				</button>
				<button>
					<img src='../images/icons/darkTheme.svg' alt='image' />
				</button>
			</div>
		</div>
	);
};

export default FontAndTheme;
