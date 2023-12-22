import { useFilter } from '../../hooks/useFilter';
import { useTheme } from '../../hooks/useTheme';
import Button from '../ui/button/Button';
import Checkbox from '../ui/checkbox/Checkbox';
import styles from './WindowFilter.module.scss';
import { arrCategory, arrMiscellaneous, arrSource } from './checkbox.data';

const WindowFilter = () => {
	const { setIsViewFilter } = useFilter();
	const { theme } = useTheme();

	return (
		<div className={styles[theme ? 'wrapper' : 'wrapper-dark']}>
			<button
				className={styles.exit__button}
				onClick={() => setIsViewFilter(false)}
			>
				<img
					src={
						theme
							? './images/icons/exit_edit.svg'
							: './images/icons/exit_edit_active_white.svg'
					}
					alt='img'
				/>
			</button>
			<form>
				<div className={styles.block__category}>
					<h2>Категории</h2>
					<div className={styles.block__checkbox}>
						{arrCategory.map(checkbox => {
							return (
								<Checkbox key={checkbox} id={checkbox}>
									{checkbox}
								</Checkbox>
							);
						})}
					</div>
				</div>
				<div className={styles.block__check_and_calendar}>
					<div className={styles.block__miscellaneous}>
						<h2>разное</h2>
						<div className={styles.block__checkbox}>
							{arrMiscellaneous.map(checkbox => {
								return (
									<Checkbox key={checkbox} id={checkbox}>
										{checkbox}
									</Checkbox>
								);
							})}
						</div>
					</div>
				</div>
				<div className={styles.block__source}>
					<h2>Источники</h2>
					<div className={styles.block__checkbox}>
						{arrSource.map(checkbox => {
							return (
								<Checkbox key={checkbox} id={checkbox}>
									{checkbox}
								</Checkbox>
							);
						})}
					</div>
				</div>
				<div className={styles.block__buttons}>
					<Button saveInfo='filter-clear'>очистить</Button>
					<Button saveInfo='filter-start'>применить</Button>
				</div>
			</form>
		</div>
	);
};

export default WindowFilter;
