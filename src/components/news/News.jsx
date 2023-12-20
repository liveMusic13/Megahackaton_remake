import { useDispatch, useSelector } from 'react-redux';
import useDescriptionLength from '../../hooks/useDescriptionLength';
import { useEditingNewsTest } from '../../hooks/useEditingNewsTest';
import { actions } from '../../store/users/Users.slice';
import styles from './News.module.scss';

const News = ({ news, setIsViewEditNews, isViewEditNews }) => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.users[0]);

	const { truncateDescription } = useDescriptionLength();

	const { editingNews, setEditingNews } = useEditingNewsTest();

	return (
		<div
			className={styles.news}
			style={
				user.news.viewHistoryNews.some(
					historyNews => historyNews.id === news.id
				)
					? { backgroundColor: '#f3f3f3' }
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
				<h2 className={styles.news__title}>{news.title}</h2>
			</div>
			<p className={styles.news__preview}>
				{truncateDescription(news.full_text, 240)}
			</p>
			<div className={styles.news__blockTwo}>
				<div className={styles.news__block_date}>
					<p className={styles.news__date}>{news.published_at}</p>
					<p className={styles.news__source}>{news.parsed_from}</p>
				</div>
				<div className={styles.news__block_buttons}>
					<button>
						<img src='./images/icons/vector.svg' alt='image' />
					</button>
					<button
						onClick={() => {
							dispatch(actions.addLaterNews(news));
						}}
					>
						<img
							src={
								user.news.viewLaterNews.some(later => later.id === news.id)
									? './images/icons/marker_active_blue.svg'
									: './images/icons/marker.svg'
							}
							alt='image'
						/>
					</button>
					<button>
						<img src='./images/icons/foulder.svg' alt='image' />
					</button>

					<button
						onClick={() => {
							dispatch(actions.deleteNewNews(news));
						}}
					>
						<img src='./images/icons/exit_edit.svg' alt='image' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default News;
