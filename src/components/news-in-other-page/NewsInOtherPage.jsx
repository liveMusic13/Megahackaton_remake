import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDescriptionLength from '../../hooks/useDescriptionLength';
import { useTheme } from '../../hooks/useTheme';
import { actions as focusActions } from '../../store/focus-object/FocusObject.slice';
import { actions } from '../../store/users/Users.slice';
import styles from './NewsInOtherPage.module.scss';

const NewsInOtherPage = ({
	news,
	focusNews,
	setFocusNews,
	page,
	// idFolderFocus,
}) => {
	const { truncateDescription } = useDescriptionLength();
	const { theme } = useTheme();
	const user = useSelector(state => state.users[0]);
	const idFolderFocus = useSelector(state => state.folderFocus[0]);

	const [isCheckbox, setIsCheckbox] = useState(false);

	const dispatch = useDispatch();

	return (
		<div
			className={styles[theme ? 'wrapper_news' : 'wrapper_news-dark']}
			onClick={() => {
				setFocusNews(news.id);
				setIsCheckbox(!isCheckbox);
				if (!isCheckbox) {
					dispatch(focusActions.addFocusNews(news.id));
				} else {
					dispatch(focusActions.deleteFocusNews(news.id));
				}
			}}
			style={
				theme
					? isCheckbox && focusNews === news.id
						? { backgroundColor: '#f3f3f3' }
						: {}
					: isCheckbox && focusNews === news.id
					? { backgroundColor: '#012749' }
					: {}
			}
		>
			<div className={styles.block__one}>
				<img
					className={styles.image__arrow}
					src={
						theme
							? '../images/icons/arrow_bottom.svg'
							: '../images/icons/arrow_bottom_white.svg'
					}
					alt='img'
				/>
				<button onClick={() => setIsCheckbox(!isCheckbox)}>
					{theme ? (
						<img
							src={
								isCheckbox
									? '../images/icons/checkbox_on.svg'
									: '../images/icons/checkbox_off.svg'
							}
							alt='img'
						/>
					) : (
						<img
							src={
								isCheckbox
									? '../images/icons/checkbox_on_white.svg'
									: '../images/icons/checkbox_off_white.svg'
							}
							alt='img'
						/>
					)}
				</button>
				<p>{news.parsed_from}</p>
			</div>

			<h2>{news.title}</h2>
			<div className={styles.block__two}>
				{page === 'history' ? (
					<>
						<button
							onClick={() => {
								dispatch(actions.addLaterNews(news));
							}}
						>
							{theme ? (
								<img
									src={
										user.news.viewLaterNews.some(later => later.id === news.id)
											? '../images/icons/marker_active_blue.svg'
											: '../images/icons/marker.svg'
									}
									alt='img'
								/>
							) : (
								<img
									src={
										user.news.viewLaterNews.some(later => later.id === news.id)
											? '../images/icons/marker_full_white.svg'
											: '../images/icons/marker_active_white.svg'
									}
									alt='img'
								/>
							)}
						</button>
						<button
							onClick={() => {
								dispatch(actions.deleteHistoryNews(news));
							}}
						>
							<img
								src={
									theme
										? '../images/icons/basketDelete_gray.svg'
										: '../images/icons/basketDelete.svg'
								}
								alt='img'
							/>
						</button>
					</>
				) : page === 'folder' ? (
					<>
						<button>
							{theme ? (
								<img src='../images/icons/foulder.svg' alt='img' />
							) : (
								<img src='../images/icons/foulder_active_white.svg' alt='img' />
							)}
						</button>
						<button>
							<img
								src={
									theme
										? '../images/icons/vector.svg'
										: '../images/icons/vector_active_white.svg'
								}
								alt='img'
							/>
						</button>
						<button
							onClick={() => {
								console.log(idFolderFocus);
								dispatch(
									actions.deleteFavoriteFoldersNews({
										news: news,
										id: idFolderFocus.id,
									})
								);
							}}
						>
							<img
								src={
									theme
										? '../images/icons/basketDelete_gray.svg'
										: '../images/icons/basketDelete.svg'
								}
								alt='img'
							/>
						</button>
					</>
				) : (
					<>
						<button>
							{theme ? (
								<img src='../images/icons/foulder.svg' alt='img' />
							) : (
								<img src='../images/icons/foulder_active_white.svg' alt='img' />
							)}
						</button>
						<button>
							<img
								src={
									theme
										? '../images/icons/vector.svg'
										: '../images/icons/vector_active_white.svg'
								}
								alt='img'
							/>
						</button>
						<button
							onClick={() => {
								dispatch(actions.deleteLaterNews(news));
							}}
						>
							<img
								src={
									theme
										? '../images/icons/basketDelete_gray.svg'
										: '../images/icons/basketDelete.svg'
								}
								alt='img'
							/>
						</button>
					</>
				)}
			</div>

			<p className={styles.tag}>
				{news.tag ? truncateDescription(news.tag, 50) : ''}
			</p>
		</div>
	);
};

export default NewsInOtherPage;
