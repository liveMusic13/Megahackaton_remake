import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDescriptionLength from '../../hooks/useDescriptionLength';
import { actions } from '../../store/users/Users.slice';
import styles from './NewsInOtherPage.module.scss';

const NewsInOtherPage = ({ news, focusNews, setFocusNews, page }) => {
	const { truncateDescription } = useDescriptionLength();
	const user = useSelector(state => state.users[0]);

	const [isCheckbox, setIsCheckbox] = useState(false);

	const dispatch = useDispatch();

	return (
		<div
			className={styles.wrapper_news}
			onClick={() => {
				setFocusNews(news.id);
				setIsCheckbox(!isCheckbox);
			}}
			style={
				isCheckbox && focusNews === news.id
					? { backgroundColor: '#f3f3f3' }
					: {}
			}
		>
			<div className={styles.block__one}>
				<img
					className={styles.image__arrow}
					src='../images/icons/arrow_bottom.svg'
					alt='img'
				/>
				<button onClick={() => setIsCheckbox(!isCheckbox)}>
					<img
						src={
							isCheckbox
								? '../images/icons/checkbox_on.svg'
								: '../images/icons/checkbox_off.svg'
						}
						alt='img'
					/>
				</button>
				<p>{news.source}</p>
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
							<img
								src={
									user.news.viewLaterNews.some(later => later.id === news.id)
										? '../images/icons/marker_active_blue.svg'
										: '../images/icons/marker.svg'
								}
								alt='img'
							/>
						</button>
						<button
							onClick={() => {
								dispatch(actions.deleteHistoryNews(news));
							}}
						>
							<img src='../images/icons/basketDelete_gray.svg' alt='img' />
						</button>
					</>
				) : (
					<>
						<button>
							<img src='../images/icons/edit_gray.svg' alt='img' />
						</button>
						<button>
							<img src='../images/icons/foulder.svg' alt='img' />
						</button>
						<button>
							<img src='../images/icons/vector.svg' alt='img' />
						</button>
						<button
							onClick={() => {
								dispatch(actions.deleteLaterNews(news));
							}}
						>
							<img src='../images/icons/basketDelete_gray.svg' alt='img' />
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
