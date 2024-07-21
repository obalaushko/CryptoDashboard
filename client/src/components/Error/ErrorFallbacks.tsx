const ErrorFallback = () => {
    return (
        <div role="alert" className="error-fallback">
            <p>
                <b>Упс... </b>
                Сталася серйозна пимилка.
            </p>
        </div>
    );
};

export const ErrorMinorFallback = () => {
    return (
        <div role="alert" className="error-fallback">
            <p>
                <b>Упс...</b>
                Щось пішло не так.
            </p>
        </div>
    );
};

export default ErrorFallback;
