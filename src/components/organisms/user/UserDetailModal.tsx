import {
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
} from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
	const { isOpen, onClose } = props;
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			autoFocus={false}
			motionPreset="slideInBottom"
		>
			<ModalOverlay />
			<ModalContent pb={6}>
				<ModalHeader>ユーザー詳細</ModalHeader>
				<ModalBody mx={4}>
					<Stack spacing={4}>
						<FormControl>
							<FormLabel>名前</FormLabel>
							<Input value="じゃけぇ" isReadOnly />
						</FormControl>
						<FormControl>
							<FormLabel>フルネーム</FormLabel>
							<Input value="Takumi Okada" isReadOnly />
						</FormControl>
						<FormControl>
							<FormLabel>MAIL</FormLabel>
							<Input value="12345@example.com" isReadOnly />
						</FormControl>
						<FormControl>
							<FormLabel>TEL</FormLabel>
							<Input value="000-0000-0000" isReadOnly />
						</FormControl>
					</Stack>
				</ModalBody>
				<ModalCloseButton />
			</ModalContent>
		</Modal>
	);
});
