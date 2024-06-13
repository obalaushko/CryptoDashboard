import { ToastContainer } from "react-toastify";
import { TitleContext } from "./context/Context.ts";
import AppRouter from "./router/AppRouter.tsx";
import { useState } from "react";

const App: React.FC = () => {
	const [title, setTitle] = useState('Crypto Dashboard');
	return (
		<TitleContext.Provider value={{ title, setTitle }}>
            <AppRouter />
            <ToastContainer autoClose={3000} limit={3} position="top-right" />
        </TitleContext.Provider>
	);
};

export default App;
