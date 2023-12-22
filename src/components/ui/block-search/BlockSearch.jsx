import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import { actions as focusActions } from '../../../store/focus-object/FocusObject.slice';
// import { actions as focusFolder } from '../../../store/folder-focus/FolderFocus.slice';TODO: РАЗОБРАТЬСЯ ПОЧЕМУ ПОСЛЕ УДАЛЕНИЯ ОДНОЙ ПАПКИ, ОТКРЫВАЯ ДРУГУЮ, ВЫЛЕТАЕТ ОШИБКА
import { actions } from '../../../store/users/Users.slice';
import Button from '../button/Button';
import InputSearch from '../input-search/InputSearch';
import styles from './BlockSearch.module.scss';

const BlockSearch = ({
	doubleBlock,
	focusNews,
	setFocusNews,
	path,
	isNewsInFolder,
	setIsNewsInFolder,
}) => {
	const dispatch = useDispatch();

	const focusNewsLength = useSelector(state => state.focusObject);
	const idFolderFocus = useSelector(state => state.folderFocus[0]);

	const { pathname } = useLocation();
	const { theme } = useTheme();

	useEffect(() => {
		dispatch(focusActions.deleteAllFocus(''));
	}, [pathname]);

	return (
		<>
			{doubleBlock !== 'yes' ? (
				<div className={styles[theme ? 'block__search' : 'block__search-dark']}>
					<InputSearch />
					<Button buttonFor='clear'>Очистить</Button>
				</div>
			) : (
				<>
					<div
						className={
							styles[theme ? 'block__search_yes' : 'block__search_yes-dark']
						}
					>
						<div className={styles.block__one}>
							<InputSearch />
							<Button buttonFor='clear'>Очистить</Button>
						</div>

						<div className={styles.add_and_delete}>
							<p>
								{focusNewsLength.length}{' '}
								{focusNewsLength.length === 0
									? 'выделенных объектов'
									: focusNewsLength.length === 1
									? 'выделенный объект'
									: 'выделенных объекта'}
							</p>

							{path === 'favorite-folder' && isNewsInFolder ? (
								<button onClick={() => setIsNewsInFolder(false)}>
									Выйти из папки
									<img
										src='../images/icons/exit_edit_active_white.svg'
										alt='img'
									/>
								</button>
							) : (
								<></>
							)}
							<button
								onClick={() => {
									if (path === 'later') {
										dispatch(actions.deleteNewsFromLater(focusNewsLength));
									} else if (path === 'favorite-folder') {
										setIsNewsInFolder(false);
										dispatch(actions.deleteFolder(idFolderFocus));
										// dispatch(focusFolder.deleteFolder(''));
									} else {
										dispatch(actions.deleteNewsFromHistory(focusNewsLength));
									}
									dispatch(focusActions.deleteAllFocus(''));
									// setFocusNews(null);
								}}
							>
								Удалить
								<img src='../images/icons/basketDelete.svg' alt='img' />
							</button>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default BlockSearch;
