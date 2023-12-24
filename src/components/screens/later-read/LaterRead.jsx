import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSaveInFolder } from '../../../hooks/useSaveInFolder';
import { useSearchTerm } from '../../../hooks/useSearchTerm';
import { useSettingView } from '../../../hooks/useSettingView';
import { useTheme } from '../../../hooks/useTheme';
import Content from '../../content/Content';
import FontAndTheme from '../../font-and-theme/FontAndTheme';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import LeftPanel from '../../left-panel/LeftPanel';
import NewsInOtherPage from '../../news-in-other-page/NewsInOtherPage';
import TitleList from '../../title-list/TitleList';
import BlockSearch from '../../ui/block-search/BlockSearch';
import NavigateBar from '../../ui/navigate-bar/NavigateBar';
import SaveInFolder from '../../ui/savi-in-folder/SaveInFolder';
import styles from './LaterRead.module.scss';

const LaterRead = () => {
	const [focusNews, setFocusNews] = useState();
	const user = useSelector(state => state.users[0]);

	const { searchTerm } = useSearchTerm();

	const { isSettingView, setIsSettingView } = useSettingView();
	const { theme } = useTheme();
	const { isSaveInFolder, setIsSaveInFolder } = useSaveInFolder();

	return (
		<Layout>
			<Header />
			<Content>
				<LeftPanel
					isSettingView={isSettingView}
					setIsSettingView={setIsSettingView}
				/>
				{isSaveInFolder && <SaveInFolder inFolder='yes' />}
				{isSettingView && <FontAndTheme />}
				<div className={styles[theme ? 'main' : 'main-dark']}>
					<NavigateBar location='later' />
					<BlockSearch
						doubleBlock='yes'
						focusNews={focusNews}
						setFocusNews={setFocusNews}
						path='later'
					/>
					<TitleList />
					<div className={styles.block__resultLater}>
						{searchTerm === '' ? (
							<>
								{user.news.viewLaterNews.map(news => {
									return (
										<NewsInOtherPage
											key={news.id}
											news={news}
											setFocusNews={setFocusNews}
											focusNews={focusNews}
										/>
									);
								})}
							</>
						) : (
							<>
								{user.news.viewLaterNews.map(news => {
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
								{user.news.viewLaterNews.every(
									news =>
										!news.title.toLowerCase().includes(searchTerm.toLowerCase())
								) && <p>нет новостей</p>}
							</>
						)}
					</div>
					{user.news.viewLaterNews.map(news => {
						if (news.id === focusNews) {
							return (
								<p key={news.id} className={styles.focusNews__description}>
									{news.full_text}
								</p>
							);
						}
					})}
				</div>
			</Content>
		</Layout>
	);
};

export default LaterRead;
