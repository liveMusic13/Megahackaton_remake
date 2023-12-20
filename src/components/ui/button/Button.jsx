import { useDispatch } from 'react-redux';
import { useSearchTerm } from '../../../hooks/useSearchTerm';
import { actions } from '../../../store/users/Users.slice';
import styles from './Button.module.scss';

const Button = ({
	children,
	buttonFor,
	setIsEditNews,
	setIsViewEditNews,
	editingNews,
}) => {
	const dispatch = useDispatch();

	const { setSearchTerm } = useSearchTerm();

	return (
		<>
			{buttonFor === 'editing' ? (
				<button
					className={styles.button_transparent}
					type='submit'
					onClick={() => {
						console.log('save');
						dispatch(
							actions.addEditingNews({
								id: editingNews.id,
								title: editingNews.title,
								full_text: editingNews.full_text,
								published_at: editingNews.published_at,
								parsed_from: editingNews.parsed_from,
							})
						);
						setIsEditNews(false);
						setIsViewEditNews(false);
					}}
				>
					{children}
				</button>
			) : buttonFor === 'clear' ? (
				<button
					className={styles.button_transparent}
					onClick={() => setSearchTerm('')}
				>
					{children}
				</button>
			) : (
				<button className={styles.button_transparent}>{children}</button>
			)}
		</>
	);
};

export default Button;
