import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchTerm } from '../../../hooks/useSearchTerm';
import { useSettingView } from '../../../hooks/useSettingView';
import Content from '../../content/Content';
import FontAndTheme from '../../font-and-theme/FontAndTheme';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import LeftPanel from '../../left-panel/LeftPanel';
import NewsInOtherPage from '../../news-in-other-page/NewsInOtherPage';
import TitleList from '../../title-list/TitleList';
import BlockSearch from '../../ui/block-search/BlockSearch';
import NavigateBar from '../../ui/navigate-bar/NavigateBar';
import styles from './History.module.scss';

const History = () => {
	const user = useSelector(store => store.users[0]);

	const [focusNews, setFocusNews] = useState();
	const { isSettingView, setIsSettingView } = useSettingView();

	const { searchTerm } = useSearchTerm();

	return (
		<Layout>
			<Header />
			<Content>
				<LeftPanel
					isSettingView={isSettingView}
					setIsSettingView={setIsSettingView}
				/>
				{isSettingView && <FontAndTheme />}
				<div className={styles.main}>
					<NavigateBar location='history' />
					<BlockSearch
						doubleBlock='yes'
						focusNews={focusNews}
						setFocusNews={setFocusNews}
					/>
					<TitleList />
					<div className={styles.block__resultHistory}>
						{searchTerm === '' ? (
							<>
								{user.news.viewHistoryNews.map(news => {
									return (
										<NewsInOtherPage
											key={news.id}
											news={news}
											setFocusNews={setFocusNews}
											focusNews={focusNews}
											page='history'
										/>
									);
								})}
							</>
						) : (
							<>
								{user.news.viewHistoryNews.map(news => {
									if (
										news.title.toLowerCase().includes(searchTerm.toLowerCase())
									) {
										return (
											<NewsInOtherPage
												key={news.id}
												news={news}
												setFocusNews={setFocusNews}
												focusNews={focusNews}
												page='history'
											/>
										);
									}
									return null;
								})}
								{user.news.viewHistoryNews.every(
									news =>
										!news.title.toLowerCase().includes(searchTerm.toLowerCase())
								) && <p>нет новостей</p>}
							</>
						)}
					</div>
				</div>
			</Content>
		</Layout>
	);
};

export default History;
