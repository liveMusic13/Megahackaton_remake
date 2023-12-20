import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store/users/Users.slice';

export const useInfoUser = () => {
	const [profileImage, setProfileImage] = useState(null);

	const [isViewName, setIsViewName] = useState(false);
	const [isViewProf, setIsViewProf] = useState(false);
	const [isViewMobile, setIsViewMobile] = useState(false);
	const [isViewEmail, setIsViewEmail] = useState(false);

	const dispatch = useDispatch();

	const handleFileChange = event => {
		const file = event.target.files[0];

		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setProfileImage(imageUrl);
			console.log(profileImage);
			dispatch(actions.addURLImage(profileImage));
		}
	};

	const repeatPassword = (main, two) => {
		return main === two;
	};

	return {
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
	};
};
