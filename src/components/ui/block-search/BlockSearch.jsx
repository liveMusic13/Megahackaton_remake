import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { actions as focusActions } from '../../../store/focus-object/FocusObject.slice';
import { actions } from '../../../store/users/Users.slice';
import Button from '../button/Button';
import InputSearch from '../input-search/InputSearch';
import styles from './BlockSearch.module.scss';

const BlockSearch = ({ doubleBlock, focusNews, setFocusNews, path }) => {
	const dispatch = useDispatch();

	const focusNewsLength = useSelector(state => state.focusObject);

	const { pathname } = useLocation();

	useEffect(() => {
		dispatch(focusActions.deleteAllFocus(''));
	}, [pathname]);

	return (
		<>
			{doubleBlock !== 'yes' ? (
				<div className={styles.block__search}>
					<InputSearch />
					<Button buttonFor='clear'>Очистить</Button>
				</div>
			) : (
				<>
					<div className={styles.block__search_yes}>
						<div className={styles.block__one}>
							<InputSearch />
							<Button buttonFor='clear'>Очистить</Button>
						</div>

						<div className={styles.add_and_delete}>
							<p>
								{focusNewsLength.length}{' '}
								{focusNewsLength.length === 0
									? 'выделенных объектов'
									: focusNewsLength.length === 1
									? 'выделенный объект'
									: 'выделенных объекта'}
							</p>

							<button
								onClick={() => {
									if (path === 'later') {
										dispatch(actions.deleteNewsFromLater(focusNewsLength));
									} else {
										dispatch(actions.deleteNewsFromHistory(focusNewsLength));
									}
									dispatch(focusActions.deleteAllFocus(''));
									setFocusNews(null);
								}}
							>
								Удалить
								<img src='../images/icons/basketDelete.svg' alt='img' />
							</button>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default BlockSearch;
