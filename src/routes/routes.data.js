import Auth from '../components/screens/auth/Auth';
import History from '../components/screens/history/History';
import Home from '../components/screens/home/Home';
import LaterRead from '../components/screens/later-read/LaterRead';
import PersonalArea from '../components/screens/personal-area/PersonalArea';

export const routes = [
	{
		path: '/home',
		component: Home,
		// isAuth: true,
		isAuth: false,
	},
	{
		path: '/',
		component: Auth,
		isAuth: false,
	},
	{
		path: '/home/personalArea',
		component: PersonalArea,
		// isAuth: true,
		isAuth: false,
	},
	// {
	// 	path: '/home/personalArea/adminPanel',
	// 	component: UserList,
	// 	// isAuth: true,
	// 	isAuth: false,
	// },
	{
		path: '/home/history',
		component: History,
		// isAuth: true,
		isAuth: false,
	},
	// {
	// 	path: '/home/favorite',
	// 	component: Favorite,
	// 	// isAuth: true,
	// 	isAuth: false,
	// },
	{
		path: '/home/laterRead',
		component: LaterRead,
		// isAuth: true,
		isAuth: false,
	},
];
