import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		id: 0,
		name: 'user777',
		profession: 'da',
		number: '832',
		email: 'dsfsafdsf@sf.ru',
		password: '43534',
		urlImage: null,
		news: {
			newNews: [
				{
					id: 1,
					title: 'Танцующие роботы на пешеходных переходах',
					full_text:
						'В городе появились танцующие роботы на пешеходных переходах. Очевидцы рассказывают о неожиданных дуэлях роботов и веселых танцевальных батлах, ставших новым трендом городского развлечения.В городе появились танцующие роботы на пешеходных переходах. Очевидцы рассказывают о неожиданных дуэлях роботов и веселых танцевальных батлах, ставших новым трендом городского развлечения.',
					published_at: '01.10.2023',
					search_words: '',
					ml_key_words: '',
					full_text_link: '',
					rating: 1,
					counter: 1,
					fun_metric: '',
					unique_metric: '',
					simple_metric: '',
					parsed_at: '',
					parsed_from: 'Фонтанка',
					tag: '#роботы, пешеходный переход',
				},
				{
					id: 2,
					title:
						'Бунт в Зоопарке: обезьяны основали секретное общество для имитации человеков',
					full_text:
						'   Вчера вечером в зоопарке города произошло невероятное событие, которое потрясло как посетителей, так и сотрудников. Группа обезьян, в тайне от всех, объединила свои усилия и создала "Секретное Общество для Имитации Человеков" (СОИЧ). Эта неожиданная инициатива выразилась в стремлении обезьян к изучению и копированию человеческого образа жизни. Специалисты зоопарка заметили, что обезьяны тщательно изучают поведение посетителей и сотрудников, а затем пытаются имитировать их по своему собственному образу. Одна из обезьян даже научилась прятать банан в рюкзаке, как будто это сендвич для перекуса в офисе. Руководство зоопарка, сначала встревоженное происходящим, в последствии решило не пресекать этот "курс по человеческим наукам" обезьян. Вместо этого, зоопарк организовал специальное шоу, где посетители могут наблюдать за забавными попытками обезьян "вживаться" в роль человека. Это событие вызвало волнение не только у посетителей, но и у работников зоопарка, которые стали свидетелями уникального "курса по человеческим наукам", проводимого обезьянами. Некоторые считают, что это может стать новым трендом в зоопарках по всему миру, а другие просто наслаждаются этим необычным и забавным шоу. Так что, если вы решите посетить этот зоопарк, будьте готовы к встрече с обезьянами, готовыми взять на себя роль человека и показать, что они способны не только на шалости, но и на подражание человеческому образу жизни.',
					published_at: '01.10.2023',
					search_words: '',
					ml_key_words: '',
					full_text_link: '',
					rating: 1,
					counter: 1,
					fun_metric: '',
					unique_metric: '',
					simple_metric: '',
					parsed_at: '',
					parsed_from: 'Naked Science',
				},
			],
			viewHistoryNews: [],
			viewLaterNews: [],
			favoritesNews: [],
		},
	},
];

export const Users = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addHistoryNews: (state, { payload }) => {
			const index = state[0].news.viewHistoryNews.findIndex(
				news => news.id === payload.id
			);

			if (index === -1) {
				state[0].news.viewHistoryNews.push(payload);
			}
		},
		addEditingNews: (state, { payload }) => {
			const index = state[0].news.newNews.findIndex(
				news => news.id === payload.id
			);

			if (index !== -1) {
				state[0].news.newNews.splice(index, 1, payload);
			} else {
				state[0].news.newNews.push(payload);
			}
		},
		addFavoritesNews: (state, { payload }) => {
			const index = state[0].news.favoritesNews.findIndex(
				news => news.id === payload.id
			);

			if (index === -1) {
				state[0].news.favoritesNews.push(payload);
			}
		},
		addLaterNews: (state, { payload }) => {
			const index = state[0].news.viewLaterNews.findIndex(
				news => news.id === payload.id
			);

			if (index === -1) {
				state[0].news.viewLaterNews.push(payload);
			}
		},
		deleteNewNews: (state, { payload }) => {
			const index = state[0].news.newNews.findIndex(
				news => news.id === payload.id
			);

			if (index !== -1) {
				state[0].news.newNews.splice(index, 1);
			}
		},
		deleteHistoryNews: (state, { payload }) => {
			const index = state[0].news.viewHistoryNews.findIndex(
				news => news.id === payload.id
			);

			if (index !== -1) {
				state[0].news.viewHistoryNews.splice(index, 1);
			}
		},
		deleteLaterNews: (state, { payload }) => {
			const index = state[0].news.viewLaterNews.findIndex(
				news => news.id === payload.id
			);

			if (index !== -1) {
				state[0].news.viewLaterNews.splice(index, 1);
			}
		},
		addURLImage: (state, { payload }) => {
			state[0].news.urlImage = payload;
		},
		editUserInfo: (state, { payload }) => {
			state[0] = { ...state[0], ...payload };
		},
		deleteNewsFromHistory: (state, { payload }) => {
			const idsToDelete = payload.map(item => item.id);

			state[0].news.viewHistoryNews = state[0].news.viewHistoryNews.filter(
				historyNews => !idsToDelete.includes(historyNews.id)
			);
		},
		deleteNewsFromLater: (state, { payload }) => {
			const idsToDelete = payload.map(item => item.id);

			state[0].news.viewLaterNews = state[0].news.viewLaterNews.filter(
				laterNews => !idsToDelete.includes(laterNews.id)
			);
		},
	},
});

export const { actions, reducer } = Users;
