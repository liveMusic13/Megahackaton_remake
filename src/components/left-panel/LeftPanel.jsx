import { useNavigate } from 'react-router-dom';
import { useCheckPath } from '../../hooks/useCheckPath';
import styles from './LeftPanel.module.scss';
import { arrImages } from './arrImagesPanel';

const LeftPanel = ({ isSettingView, setIsSettingView }) => {
	const navigate = useNavigate();

	const {
		userRef,
		user_activeRef,
		userBlockRef,
		historyRef_active,
		historyRef,
		historyBlockRef,
		favoriteBlockRef,
		favoriteRef,
		favoriteRef_active,
		laterRef,
		laterRef_active,
		laterBlockRef,
	} = useCheckPath();

	return (
		<div className={styles.wrapper}>
			{arrImages.map(elem => {
				return (
					<button
						ref={
							elem.id === 1
								? userBlockRef
								: elem.id === 3
								? laterBlockRef
								: elem.id === 4
								? favoriteBlockRef
								: elem.id === 5
								? historyBlockRef
								: undefined
						}
						className={styles.block_param}
						key={elem.id}
						onClick={() => {
							if (elem.id === 2) {
								setIsSettingView(!isSettingView);
							} else if (elem.id === 5) {
								navigate('/home/history');
							} else if (elem.id === 3) {
								navigate('/home/laterRead');
							} else if (elem.id === 1) {
								navigate('/home/personalArea');
							} else if (elem.id === 6) {
								navigate('/');
							}
						}}
					>
						<img
							ref={
								elem.id === 1
									? userRef
									: elem.id === 3
									? laterRef
									: elem.id === 4
									? favoriteRef
									: elem.id === 5
									? historyRef
									: undefined
							}
							className={styles.image}
							src={elem.src}
							alt='img'
						/>
						<img
							ref={
								elem.id === 1
									? user_activeRef
									: elem.id === 3
									? laterRef_active
									: elem.id === 4
									? favoriteRef_active
									: elem.id === 5
									? historyRef_active
									: undefined
							}
							className={styles.image_active}
							src={elem.src_active}
							alt='img'
						/>
						<p>{elem.text}</p>
					</button>
				);
			})}
		</div>
	);
};

export default LeftPanel;
