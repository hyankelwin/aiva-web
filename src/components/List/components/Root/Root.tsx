import { List } from '../../styles';

interface RootProps {
	children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children, ...rest }) => {
	return <List {...rest}>{children}</List>;
};

export default Root;
