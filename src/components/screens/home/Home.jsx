import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEditingNewsTest } from '../../../hooks/useEditingNewsTest';
import { useFilter } from '../../../hooks/useFilter';
import { useSearchTerm } from '../../../hooks/useSearchTerm';
import { useSettingView } from '../../../hooks/useSettingView';
import Content from '../../content/Content';
import Editing from '../../editing/Editing';
import FontAndTheme from '../../font-and-theme/FontAndTheme';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import LeftPanel from '../../left-panel/LeftPanel';
import News from '../../news/News';
import WindowFilter from '../../window-filter/WindowFilter';
import styles from './Home.module.scss';

const Home = () => {
	const { editingNews, setEditingNews } = useEditingNewsTest();
	const [isViewEditNews, setIsViewEditNews] = useState(false);

	const { isSettingView, setIsSettingView } = useSettingView();

	const { searchTerm } = useSearchTerm();
	const { isViewFilter } = useFilter();

	const user = useSelector(state => state.users[0]);

	return (
		<Layout justifyContent='space-between' bgImage='./images/home.jpg'>
			<Header search='search' />
			<Content>
				<LeftPanel
					isSettingView={isSettingView}
					setIsSettingView={setIsSettingView}
				/>
				{isSettingView && <FontAndTheme />}
				<div className={styles.block__news}>
					<div className={styles.block__sorting}>
						<button className={styles.button__sorting}>
							<img src='./images/icons/arrow_down_up.svg' alt='img' />
							Сортировка
						</button>
						<p className={styles.allNews}>
							Всего {user.news.newNews.length} новости
						</p>
					</div>
					{searchTerm === '' ? (
						<>
							{user.news.newNews.map(news => {
								return (
									<News
										key={news.id}
										setIsViewEditNews={setIsViewEditNews}
										isViewEditNews={isViewEditNews}
										news={news}
									/>
								);
							})}
						</>
					) : (
						<>
							{user.news.newNews.map(news => {
								if (
									news.title.toLowerCase().includes(searchTerm.toLowerCase())
								) {
									return (
										<News
											key={news.id}
											setIsViewEditNews={setIsViewEditNews}
											isViewEditNews={isViewEditNews}
											news={news}
										/>
									);
								}
								return null;
							})}
							{user.news.newNews.every(
								news =>
									!news.title.toLowerCase().includes(searchTerm.toLowerCase())
							) && <p>нет новостей</p>}
						</>
					)}
				</div>
				{isViewEditNews && <Editing setIsViewEditNews={setIsViewEditNews} />}
			</Content>
			{isViewFilter && <WindowFilter />}
		</Layout>
	);
};

export default Home;
