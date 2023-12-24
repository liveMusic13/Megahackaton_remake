import { useDispatch, useSelector } from 'react-redux';
import useDescriptionLength from '../../hooks/useDescriptionLength';
import { useEditingNewsTest } from '../../hooks/useEditingNewsTest';
import { useSaveInFolder } from '../../hooks/useSaveInFolder';
import { useShareEmail } from '../../hooks/useShareEmail';
import { useTheme } from '../../hooks/useTheme';
import { actions } from '../../store/users/Users.slice';
import styles from './News.module.scss';

const News = ({ news, setIsViewEditNews, isViewEditNews }) => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.users[0]);

	const { truncateDescription } = useDescriptionLength();

	const { editingNews, setEditingNews } = useEditingNewsTest();
	const { setIsSaveInFolder } = useSaveInFolder();
	const { setIsShareEmail } = useShareEmail();

	const { theme } = useTheme();

	return (
		<div
			className={styles.news}
			style={
				theme
					? user.news.viewHistoryNews.some(
							historyNews => historyNews.id === news.id
					  )
						? { backgroundColor: '#f3f3f3' }
						: {}
					: user.news.viewHistoryNews.some(
							historyNews => historyNews.id === news.id
					  )
					? { backgroundColor: 'rgba(0, 83, 154, 1)' }
					: {}
			}
			onClick={() => {
				setEditingNews({
					id: news.id,
					title: news.title,
					published_at: news.published_at,
					parsed_from: news.parsed_from,
					full_text: news.full_text,
				});
				setIsViewEditNews(!isViewEditNews);
				console.log(isViewEditNews, 'новость: ', editingNews);
				dispatch(actions.addHistoryNews(news));
			}}
		>
			<div className={styles.news__blockOne}>
				<h2 className={styles[theme ? 'news__title' : 'news__title-dark']}>
					{news.title}
				</h2>
			</div>
			<p className={styles[theme ? 'news__preview' : 'news__preview-dark']}>
				{truncateDescription(news.full_text, 240)}
			</p>
			<div className={styles.news__blockTwo}>
				<div className={styles.news__block_date}>
					<p className={styles[theme ? 'news__date' : 'news__date-dark']}>
						{news.published_at}
					</p>
					<p className={styles[theme ? 'news__source' : 'news__source-dark']}>
						{news.parsed_from}
					</p>
				</div>
				<div className={styles.news__block_buttons}>
					<button onClick={() => setIsShareEmail(true)}>
						<img
							src={
								theme
									? './images/icons/vector.svg'
									: './images/icons/vector_active_white.svg'
							}
							alt='image'
						/>
					</button>
					<button
						onClick={() => {
							dispatch(actions.addLaterNews(news));
						}}
					>
						{theme ? (
							<img
								src={
									user.news.viewLaterNews.some(later => later.id === news.id)
										? './images/icons/marker_active_blue.svg'
										: './images/icons/marker.svg'
								}
								alt='image'
							/>
						) : (
							<img
								src={
									user.news.viewLaterNews.some(later => later.id === news.id)
										? './images/icons/marker_full_white.svg'
										: './images/icons/marker_active_white.svg'
								}
								alt='image'
							/>
						)}
					</button>
					<button onClick={() => setIsSaveInFolder(true)}>
						{theme ? (
							<img
								src={
									user.news.favoritesNews.some(folder =>
										folder.arrayNews.some(favorite => favorite.id === news.id)
									)
										? './images/icons/foulder_active_blue.svg'
										: './images/icons/foulder.svg'
								}
								alt='image'
							/>
						) : (
							<img
								src={
									user.news.favoritesNews.some(folder =>
										folder.arrayNews.some(favorite => favorite.id === news.id)
									)
										? './images/icons/foulder_full_white.svg'
										: './images/icons/foulder_active_white.svg'
								}
								alt='image'
							/>
						)}
					</button>

					<button
						onClick={() => {
							dispatch(actions.deleteNewNews(news));
						}}
					>
						<img
							src={
								theme
									? './images/icons/exit_edit.svg'
									: './images/icons/exit_edit_active_white.svg'
							}
							alt='image'
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default News;
