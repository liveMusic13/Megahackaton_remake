import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSaveInFolder } from '../../../hooks/useSaveInFolder';
import { useSearchTerm } from '../../../hooks/useSearchTerm';
import { useSettingView } from '../../../hooks/useSettingView';
import { useShareEmail } from '../../../hooks/useShareEmail';
import { useTheme } from '../../../hooks/useTheme';
import { actions } from '../../../store/folder-focus/FolderFocus.slice';
import { actions as userActions } from '../../../store/users/Users.slice';
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
import ShareEmail from '../../ui/share-email/ShareEmail';
import styles from './FavoriteFolders.module.scss';

const FavoriteFolders = () => {
	const { theme } = useTheme();
	const { isSettingView, setIsSettingView } = useSettingView();
	const { searchTerm } = useSearchTerm();
	const { isSaveInFolder } = useSaveInFolder();
	const { isShareEmail } = useShareEmail();

	const [focusNews, setFocusNews] = useState();

	const user = useSelector(state => state.users[0]);
	const idFolderFocus = useSelector(state => state.folderFocus[0]);
	const dispatch = useDispatch();

	const [isNewsInFolder, setIsNewsInFolder] = useState(false);

	const [isCreateFolder, setIsCreateFolder] = useState(false);
	const [valueCreateFolder, setValueCreateFolder] = useState('');

	const createId = () => {
		return user.news.favoritesNews.length + Math.random();
	};

	return (
		<Layout
			bgImage={
				theme
					? '../images/favorite_folder.jpg'
					: '../images/favorite_folder-dark.jpg'
			}
		>
			<Header />
			<Content>
				<LeftPanel
					isSettingView={isSettingView}
					setIsSettingView={setIsSettingView}
				/>
				{isShareEmail && <ShareEmail />}
				{isSaveInFolder && <SaveInFolder inFolder='yes' />}
				{isSettingView && <FontAndTheme />}
				<div className={styles.main}>
					<NavigateBar location='favorite' />
					<BlockSearch
						doubleBlock='yes'
						path='favorite-folder'
						isNewsInFolder={isNewsInFolder}
						setIsNewsInFolder={setIsNewsInFolder}
					/>
					{isNewsInFolder && <TitleList />}
					{isNewsInFolder ? (
						<>
							<div
								className={
									styles[
										theme ? 'block__resultFolder' : 'block__resultFolder-dark'
									]
								}
							>
								{searchTerm === '' ? (
									<>
										{user.news?.favoritesNews
											.find(folder => folder.id === idFolderFocus.id)
											?.arrayNews?.map(news => (
												<NewsInOtherPage
													key={news.id}
													news={news}
													setFocusNews={setFocusNews}
													focusNews={focusNews}
													page='folder'
												/>
											))}
									</>
								) : (
									<>
										{user.news?.favoritesNews
											.find(folder => folder.id === idFolderFocus.id)
											?.arrayNews?.map(news => {
												if (
													news.title
														.toLowerCase()
														.includes(searchTerm.toLowerCase())
												) {
													return (
														<NewsInOtherPage
															key={news.id}
															news={news}
															setFocusNews={setFocusNews}
															focusNews={focusNews}
															page='folder'
															idFolderFocus={idFolderFocus}
														/>
													);
												}
												return null;
											})}
										{user.news?.favoritesNews
											.find(folder => folder.id === idFolderFocus.id)
											?.arrayNews?.every(
												news =>
													!news.title
														.toLowerCase()
														.includes(searchTerm.toLowerCase())
											) && <p>нет новостей</p>}
									</>
								)}
							</div>
							{user.news?.favoritesNews
								.find(folder => folder.id === idFolderFocus.id)
								?.arrayNews?.map(news => {
									if (news.id === focusNews) {
										return (
											<p
												key={news.id}
												className={
													styles[
														theme
															? 'focusNews__description'
															: 'focusNews__description-dark'
													]
												}
											>
												{news.full_text}
											</p>
										);
									}
								})}
						</>
					) : (
						<div className={styles.block__buttons}>
							{user.news.favoritesNews.map(folder => {
								return (
									<button
										key={folder.id}
										className={
											styles[theme ? 'button__folder' : 'button__folder-dark']
										}
										onClick={() => {
											dispatch(actions.addFolderFocusNews(folder.id));
											setIsNewsInFolder(true);
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
										{folder.name}
									</button>
								);
							})}

							{isCreateFolder ? (
								<div
									className={
										styles[theme ? 'create__folder' : 'create__folder-dark']
									}
								>
									<input
										type='text'
										value={valueCreateFolder}
										onChange={event => setValueCreateFolder(event.target.value)}
									/>
									<button
										onClick={() => {
											setValueCreateFolder('');
											dispatch(
												userActions.addFolder({
													id: createId(),
													name: valueCreateFolder,
												})
											);

											setIsCreateFolder(false);
										}}
									>
										создать
									</button>
									<button
										onClick={() => {
											setValueCreateFolder('');
											setIsCreateFolder(false);
										}}
									>
										отмена
									</button>
								</div>
							) : (
								<button
									className={
										styles[
											theme ? 'button__folder_add' : 'button__folder_add-dark'
										]
									}
									onClick={() => setIsCreateFolder(true)}
								>
									<img
										src={
											theme
												? '../images/icons/favorite_foulder_add.svg'
												: '../images/icons/favorite_foulder_add_blue.svg'
										}
										alt='img'
									/>
									Добавить новую папку
								</button>
							)}
						</div>
					)}
				</div>
			</Content>
		</Layout>
	);
};

export default FavoriteFolders;
