import { Button } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

type Props = {
	children: ReactNode;
	onClick: () => void;
	loading?: boolean;
	disabled?: boolean;
};

export const PrimaryButton: FC<Props> = memo((props) => {
	const { children, disabled = false, loading = false, onClick } = props;
	return (
		<Button
			bg="teal.400"
			color="white"
			_hover={{ opacity: 0.8 }}
			isDisabled={disabled}
			isLoading={loading}
			onClick={onClick}
		>
			{children}
		</Button>
	);
});
