import { useSettingView } from '../../../hooks/useSettingView';
import { useTheme } from '../../../hooks/useTheme';
import Content from '../../content/Content';
import FontAndTheme from '../../font-and-theme/FontAndTheme';
import Header from '../../header/Header';
import InsideInfo from '../../inside-info/InsideInfo';
import Layout from '../../layout/Layout';
import LeftPanel from '../../left-panel/LeftPanel';

const PersonalArea = () => {
	const { isSettingView, setIsSettingView } = useSettingView();
	const { theme } = useTheme();

	return (
		<Layout
			justifyContent='space-between'
			bgImage={
				theme ? '../images/inside_info.jpg' : '../images/inside_info-dark.jpg'
			}
		>
			<Header />
			<Content>
				<LeftPanel
					isSettingView={isSettingView}
					setIsSettingView={setIsSettingView}
				/>
				{isSettingView && <FontAndTheme />}
				<InsideInfo />
			</Content>
		</Layout>
	);
};

export default PersonalArea;
