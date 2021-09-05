function CreateAccount(){
    const ctx = React.useContext(UserContext);
    return(
        <div className="container">
            <Template
                bgcolor="primary"
                header=" Crete Account"
                showName={true}
                showEmail={true}
                showPassword={true}
                showAddAccountButton={true}
            />
        </div>
    );
}
