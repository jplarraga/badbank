function LogIn() {
    const ctx = React.useContext(UserContext);
    return (
        <Template
            bgcolor="warning"
            header="Log In"
            showEmail={true}
            showPassword={true}
            showLogInButton={true}
        />
    );
}