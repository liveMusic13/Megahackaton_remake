import { useDispatch, useSelector } from 'react-redux';
import { useEditingNewsTest } from '../../../hooks/useEditingNewsTest';
import { useSaveInFolder } from '../../../hooks/useSaveInFolder';
import { useTheme } from '../../../hooks/useTheme';
import { actions } from '../../../store/users/Users.slice';
import styles from './SaveInFolder.module.scss';

const SaveInFolder = ({ inFolder }) => {
	const { theme } = useTheme();
	const user = useSelector(state => state.users[0]);
	const focusObject = useSelector(state => state.focusObject[0]);
	const { setIsSaveInFolder } = useSaveInFolder();
	const { editingNews } = useEditingNewsTest();

	const dispatch = useDispatch();

	const searchNewsInFocus = () => {
		return user.news.newNews.find(news => news.id === focusObject.id);
	};

	return (
		<div className={styles[theme ? 'wrapper' : 'wrapper-dark']}>
			<button onClick={() => setIsSaveInFolder(false)} className={styles.exit}>
				<img
					src={
						theme
							? '../images/icons/exit_edit_black.svg'
							: '../images/icons/exit_edit.svg'
					}
					alt='img'
				/>
			</button>
			<h2>Сохранить в моей папке</h2>
			<div className={styles[theme ? 'block__folders' : 'block__folders-dark']}>
				{user.news.favoritesNews.map(folder => {
					return (
						<button
							key={folder.id}
							className={styles[theme ? 'block__folder' : 'block__folder-dark']}
							onClick={() => {
								dispatch(
									actions.addFavoriteFolderNews({
										id: folder.id,
										news:
											inFolder === 'yes' ? searchNewsInFocus() : editingNews,
									})
								);

								setIsSaveInFolder(false);
							}}
						>
							<img
								src={
									theme
										? '../images/icons/favorite_foulder.svg'
										: '../images/icons/favorite_foulder_white.svg'
								}
								alt='img'
							/>
							<p>{folder.name}</p>
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default SaveInFolder;
