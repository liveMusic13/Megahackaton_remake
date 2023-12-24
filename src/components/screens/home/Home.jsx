import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFilter } from '../../../hooks/useFilter';
import { useSaveInFolder } from '../../../hooks/useSaveInFolder';
import { useSearchTerm } from '../../../hooks/useSearchTerm';
import { useSettingView } from '../../../hooks/useSettingView';
import { useShareEmail } from '../../../hooks/useShareEmail';
import { useTheme } from '../../../hooks/useTheme';
import Content from '../../content/Content';
import Editing from '../../editing/Editing';
import FontAndTheme from '../../font-and-theme/FontAndTheme';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import LeftPanel from '../../left-panel/LeftPanel';
import News from '../../news/News';
import SaveInFolder from '../../ui/savi-in-folder/SaveInFolder';
import ShareEmail from '../../ui/share-email/ShareEmail';
import WindowFilter from '../../window-filter/WindowFilter';
import styles from './Home.module.scss';

const Home = () => {
	const { theme } = useTheme();

	const [isViewEditNews, setIsViewEditNews] = useState(false);

	const { isSettingView, setIsSettingView } = useSettingView();
	const { isSaveInFolder } = useSaveInFolder();
	const { isShareEmail } = useShareEmail();

	const { searchTerm } = useSearchTerm();
	const { isViewFilter } = useFilter();

	const user = useSelector(state => state.users[0]);

	return (
		<Layout
			justifyContent='space-between'
			bgImage={theme ? './images/home.jpg' : './images/home_dark.jpg'}
		>
			<Header search='search' />
			<Content>
				<LeftPanel
					isSettingView={isSettingView}
					setIsSettingView={setIsSettingView}
				/>
				{isShareEmail && <ShareEmail />}
				{isSettingView && <FontAndTheme />}
				{isSaveInFolder && <SaveInFolder inFolder='no' />}
				<div className={styles.block__news}>
					<div className={styles.block__sorting}>
						<button
							className={
								styles[theme ? 'button__sorting' : 'button__sorting-dark']
							}
						>
							<img
								src={
									theme
										? './images/icons/arrow_down_up.svg'
										: './images/icons/arrow_down_up_white.svg'
								}
								alt='img'
							/>
							Сортировка
						</button>
						<p className={styles[theme ? 'allNews' : 'allNews-dark']}>
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
							) && (
								<p className={styles[theme ? 'noNews' : 'noNews_dark']}>
									нет новостей
								</p>
							)}
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
