import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInfoUser } from '../../hooks/useInfoUser';
import { actions as interActions } from '../../store/interlayer/Interlayer.slice';
import { actions } from '../../store/users/Users.slice';
import styles from './InsideInfo.module.scss';

const InsideInfo = () => {
	const {
		dispatch,
		profileImage,
		setProfileImage,
		isViewName,
		setIsViewName,
		isViewProf,
		setIsViewProf,
		isViewMobile,
		setIsViewMobile,
		isViewEmail,
		setIsViewEmail,
		handleFileChange,
		repeatPassword,
	} = useInfoUser();

	const user = useSelector(state => state.users[0]);
	const userInterlayer = useSelector(state => state.interlayer[0]);

	const [secondPassword, setSecondPassword] = useState();

	return (
		<div className={styles.wrapper}>
			<div className={styles.block__image_profile}>
				<div className={styles.block__navigation}>
					<Link to={'/home'}>Главная</Link>
					<p>/</p>
					<p>Личный кабинет</p>
				</div>
				{profileImage ? (
					<div className={styles.block__image_profile}>
						<img
							className={styles.image_profile}
							src={profileImage}
							alt='image'
						/>
						<input type='file' accept='image/*' onChange={handleFileChange} />
					</div>
				) : (
					<div className={styles.image_profile_noFoto}>
						<button>
							<img src='../images/image_profile.png' alt='image' />
							<input type='file' accept='image/*' onChange={handleFileChange} />
						</button>
					</div>
				)}
			</div>

			<div className={styles.block__content}>
				<div className={styles.block__name}>
					{isViewName ? (
						<>
							<input
								autoFocus
								className={styles.h2}
								type='text'
								placeholder='ФИО'
								onClick={() => setIsViewName(!isViewName)}
								onChange={event =>
									dispatch(
										interActions.interlayerUserInfo({
											name: event.target.value,
										})
									)
								}
								value={userInterlayer.name}
							/>
						</>
					) : (
						<>
							<h2 onClick={() => setIsViewName(!isViewName)}>
								{userInterlayer.name}
							</h2>
						</>
					)}
					{isViewProf ? (
						<>
							<input
								autoFocus
								className={styles.p}
								type='text'
								placeholder='Должность'
								onClick={() => setIsViewProf(!isViewProf)}
								onChange={event =>
									dispatch(
										interActions.interlayerUserInfo({
											profession: event.target.value,
										})
									)
								}
								value={userInterlayer.profession}
							/>
						</>
					) : (
						<>
							<p onClick={() => setIsViewProf(!isViewProf)}>
								{userInterlayer.profession}
							</p>
						</>
					)}
				</div>
				<div className={styles.block__contact}>
					<div className={styles.mobile}>
						<p>Мобильный телефон</p>
						{isViewMobile ? (
							<input
								autoFocus
								className={styles.p}
								type='text'
								placeholder='Телефон'
								onClick={() => setIsViewMobile(!isViewMobile)}
								value={userInterlayer.number}
								onChange={event =>
									dispatch(
										interActions.interlayerUserInfo({
											number: event.target.value,
										})
									)
								}
							/>
						) : (
							<p onClick={() => setIsViewMobile(!isViewMobile)}>
								{userInterlayer.number}
							</p>
						)}
					</div>
					<div className={styles.email}>
						<p>Почта</p>
						{isViewEmail ? (
							<input
								autoFocus
								className={styles.p}
								type='text'
								placeholder='Почта'
								onClick={() => setIsViewEmail(!isViewEmail)}
								value={userInterlayer.email}
								onChange={event =>
									dispatch(
										interActions.interlayerUserInfo({
											email: event.target.value,
										})
									)
								}
							/>
						) : (
							<p onClick={() => setIsViewEmail(!isViewEmail)}>
								{userInterlayer.email}
							</p>
						)}
					</div>
				</div>
				<div className={styles.block__password}>
					<label htmlFor='main'>Смена пароля</label>
					<input
						className={styles.main_pass}
						type='password'
						id='main'
						value={userInterlayer.password.new}
						onClick={() => {
							dispatch(
								interActions.interlayerUserPassword({ old: user.password })
							);
						}}
						onChange={event =>
							dispatch(
								interActions.interlayerUserPassword({ new: event.target.value })
							)
						}
					/>
				</div>
				<div className={styles.block__password}>
					<label htmlFor='repeat'>Повторить новый пароль</label>
					<input
						className={styles.second_pass}
						type='password'
						id='repeat'
						value={secondPassword}
						onChange={event => setSecondPassword(event.target.value)}
					/>
				</div>
				<button
					className={styles.button_save}
					onClick={() => {
						const userData = {
							name: userInterlayer.name,
							profession: userInterlayer.profession,
							number: userInterlayer.number,
							email: userInterlayer.email,
							password: repeatPassword(
								userInterlayer.password.new,
								secondPassword
							)
								? userInterlayer.password.new
								: userInterlayer.password.old,
						};
						dispatch(actions.editUserInfo(userData));
					}}
				>
					сохранить
				</button>
			</div>
		</div>
	);
};

export default InsideInfo;
