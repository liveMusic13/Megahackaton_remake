import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEditingNewsTest } from '../../hooks/useEditingNewsTest';
import { useSaveInFolder } from '../../hooks/useSaveInFolder';
import { useTheme } from '../../hooks/useTheme';
import { actions } from '../../store/users/Users.slice';
import styles from './Editing.module.scss';

const Editing = ({ setIsViewEditNews }) => {
	const [isEditNews, setIsEditNews] = useState(false);
	const { editingNews, setEditingNews } = useEditingNewsTest();
	const { setIsSaveInFolder } = useSaveInFolder();

	const user = useSelector(state => state.users[0]);

	const [isActiveEdit, setIsActiveEdit] = useState(false);

	const dispatch = useDispatch();

	const { theme } = useTheme();

	return (
		<div className={styles[theme ? 'editing' : 'editing-dark']}>
			<>
				<div className={styles.header__edit}>
					<Link to='#'>К источнику</Link>
					<div className={styles.header__buttons}>
						<button
							onClick={() => {
								setIsEditNews(true);
								setIsActiveEdit(true);
							}}
						>
							<img
								src={
									isActiveEdit
										? './images/icons/edit_full_white.svg'
										: './images/icons/edit.svg'
								}
								alt='image'
							/>
						</button>
						<button onClick={() => setIsSaveInFolder(true)}>
							<img src='./images/icons/vector_active_white.svg' alt='image' />
						</button>
						<button
							onClick={() => {
								dispatch(actions.addLaterNews(editingNews));
							}}
						>
							<img
								src={
									user.news.viewLaterNews.some(
										later => later.id === editingNews.id
									)
										? './images/icons/marker_full_white.svg'
										: './images/icons/marker_active_white.svg'
								}
								alt='image'
							/>
						</button>
						<button
							onClick={() => {
								if (isActiveEdit) setIsActiveEdit(false);
								setIsViewEditNews(false);
							}}
						>
							<img
								src='./images/icons/exit_edit_active_white.svg'
								alt='image'
							/>
						</button>
					</div>
				</div>
				<form>
					{isEditNews ? (
						<input
							className={styles.title}
							value={editingNews.title}
							onChange={event => {
								setEditingNews(prev => ({
									...prev,
									title: event.target.value,
								}));
							}}
						/>
					) : (
						<h2 className={styles.title}>{editingNews.title}</h2>
					)}
					<div className={styles.block__date}>
						{isEditNews ? (
							<input
								className={styles.date}
								type='text'
								value={editingNews.published_at}
								onChange={event => {
									setEditingNews(prev => ({
										...prev,
										published_at: event.target.value,
									}));
								}}
							/>
						) : (
							<p className={styles.date}>{editingNews.published_at}</p>
						)}
						{isEditNews ? (
							<input
								className={styles.source}
								type='text'
								value={editingNews.parsed_from}
								onChange={event => {
									setEditingNews(prev => ({
										...prev,
										parsed_from: event.target.value,
									}));
								}}
							/>
						) : (
							<p className={styles.source}>{editingNews.parsed_from}</p>
						)}
					</div>
					{isEditNews ? (
						<textarea
							className={styles.description}
							value={editingNews.full_text}
							onChange={event => {
								setEditingNews(prev => ({
									...prev,
									full_text: event.target.value,
								}));
							}}
						></textarea>
					) : (
						<p className={styles.description}>{editingNews.full_text}</p>
					)}

					{isEditNews ? (
						<input
							className={styles.teg}
							type='text'
							placeholder='ДОБАВИТЬ ТЕГИ'
						/>
					) : (
						<p className={styles.teg}>ДОБАВИТЬ ТЕГИ</p>
					)}
					{isEditNews ? (
						<textarea
							className={styles.comments}
							placeholder='Комментарии'
						></textarea>
					) : (
						<p className={styles.comments}>Комментарии</p>
					)}

					<div className={styles.block__buttons}>
						<button
							className={styles[theme ? 'button_exit' : 'button_exit-dark']}
							onClick={() => {
								setIsActiveEdit(false);
							}}
						>
							отмена
						</button>
						<button
							type='submit'
							onClick={() => {
								dispatch(
									actions.addEditingNews({
										id: editingNews.id,
										title: editingNews.title,
										full_text: editingNews.full_text,
										published_at: editingNews.published_at,
										parsed_from: editingNews.parsed_from,
									})
								);
								setIsEditNews(false);
								setIsViewEditNews(false);
							}}
						>
							Сохранить
						</button>
						{/* <Button>отмена</Button>
						<Button buttonFor='editing'>Сохранить</Button>
						//TODO: РАЗОБРАТЬСЯ
						ПОЧЕМУ ПРИ РЕАЛИЗАЦИИ СОХРАНЕНИЯ ЧЕРЕЗ КОМПОНЕНТ КНОПКИ, НИЧЕГО НЕ
						ПРОИСХОДИТ */}
					</div>
				</form>
			</>
		</div>
	);
};

export default Editing;
