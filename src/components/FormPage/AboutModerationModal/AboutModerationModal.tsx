import { useState } from 'react';
import { Typography } from 'antd';
import './AboutModerationModal.scss';
import UIWrapper from '../../../ui/Wrapper/Wrapper';

const { Link } = Typography;

const AboutModerationModal = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const children = (
		<div className="about-moderation-modal">
			<p className="modal-title">Модерация</p>
			<p className="modal-text">
				Этап когда ваш профиль проходит проверку на подлинность (до 24 часов)
			</p>
		</div>
	);

	return (
		<>
			<Link underline onClick={showModal} className="link">
				Что такое модерация?
			</Link>
			<UIWrapper
				active={isModalVisible}
				onClick={handleCancel}
				children={children}
			/>
		</>
	);
};

export default AboutModerationModal;
