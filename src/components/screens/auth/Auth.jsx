import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout/Layout';
import Button from '../../ui/button/Button';
import styles from './Auth.module.scss';

const Auth = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	});

	const navigate = useNavigate();

	return (
		<Layout bgImage='./images/auth.jpg'>
			<div className={styles.auth}>
				<img
					className={styles.image_auth}
					src='./images/icons/userAuth.svg'
					alt='user'
				/>
				<form onSubmit={handleSubmit()}>
					<div className={styles.input_block}>
						<input
							{...register('email', {
								required: true,
								pattern: {
									value:
										/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
								},
							})}
							type='text'
							placeholder='E-mail'
						/>
						{errors.email && <span>Введите email</span>}
					</div>

					<div className={styles.input_block}>
						<input
							{...register('password', { required: true })}
							type='password'
							placeholder='Password'
						/>
						{errors.password && <span>Введите пароль</span>}
					</div>

					<Button>Вход</Button>
				</form>
				<button className={styles.test} onClick={() => navigate('/home')}>
					Тестовый вход
				</button>
			</div>
		</Layout>
	);
};

export default Auth;
