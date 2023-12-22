import { useState } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import styles from './Checkbox.module.scss';

const Checkbox = ({ children, id }) => {
	const [test, setTest] = useState(false);
	const { theme } = useTheme();

	return (
		<div className={styles[theme ? 'checkbox' : 'checkbox-dark']}>
			{theme ? (
				<img
					src={
						test
							? './images/icons/checkbox_on.svg'
							: './images/icons/checkbox_off.svg'
					}
					alt='image'
				/>
			) : (
				<img
					src={
						test
							? './images/icons/checkbox_on_white.svg'
							: './images/icons/checkbox_off_white.svg'
					}
					alt='image'
				/>
			)}
			<input id={id} type='checkbox' onClick={() => setTest(!test)} />
			<label htmlFor={id}>{children}</label>
		</div>
	);
};

export default Checkbox;
