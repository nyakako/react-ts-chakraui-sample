import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
} from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
	onClose: () => void;
	isOpen: boolean;
	onClickHome: () => void;
	onClickUserManagement: () => void;
	onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
	const {
		onClose,
		isOpen,
		onClickHome,
		onClickUserManagement,
		onClickSetting,
	} = props;

	const handleItemClick = (onClickFunction: () => void) => {
		return () => {
			onClickFunction();
			onClose();
		};
	};
	return (
		<Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
			<DrawerOverlay>
				<DrawerContent>
					<DrawerBody p={0} bg="gray.100">
						<Button w="100%" onClick={handleItemClick(onClickHome)}>
							TOP
						</Button>
						<Button w="100%" onClick={handleItemClick(onClickUserManagement)}>
							ユーザー一覧
						</Button>
						<Button w="100%" onClick={handleItemClick(onClickSetting)}>
							設定
						</Button>
					</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
});
