import stylex from '@stylexjs/stylex';

const styles = stylex.create({
	main: {
		color: '#333333',
	},
});

function App() {
	return (
		<>
			<p {...stylex.props(styles.main)}>Hello React!</p>
		</>
	);
}

export default App;
