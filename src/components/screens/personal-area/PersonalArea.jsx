import { useSettingView } from '../../../hooks/useSettingView';
import Content from '../../content/Content';
import FontAndTheme from '../../font-and-theme/FontAndTheme';
import Header from '../../header/Header';
import InsideInfo from '../../inside-info/InsideInfo';
import Layout from '../../layout/Layout';
import LeftPanel from '../../left-panel/LeftPanel';

const PersonalArea = () => {
	const { isSettingView, setIsSettingView } = useSettingView();

	return (
		<Layout justifyContent='space-between'>
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
