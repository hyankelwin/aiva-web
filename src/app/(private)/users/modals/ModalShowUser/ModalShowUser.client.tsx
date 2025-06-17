'use client';

import { useCommonStore } from '@/store/CommonStore';
import { ModalShowUserView } from './ModalShowUser.view';
import { useUserManageStore } from '@/store/UserManageStore';
import { IUser } from '@/interfaces/user.interface';

const ModalVUser = () => {
	const { updateShowsModals, showModals } = useUserManageStore();
	const { itemSelected } = useCommonStore();

	const item = itemSelected?.row as IUser;

	const handleCloseModal = () => {
		updateShowsModals('isModalShowUser', false);
	};

	return (
		<ModalShowUserView
			open={showModals.isModalShowUser}
			onClose={handleCloseModal}
			user={item}
		/>
	);
};

export default ModalVUser;
