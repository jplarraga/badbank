function Spa() {
    return (
        <HashRouter>
            
            <NavBar/>

            <UserContext.Provider value={{
                    users: 
                    [{
                        name:'Juan', 
                        email:'jplarraga@gmail.com', 
                        password:'1234', 
                        balance:100
                    }]
                }}>
                <Route path="/" exact component={Home} />
                <Route path="/CreateAccount/" exact component={CreateAccount} />
                <Route path="/alldata/" exact component={AllData} />
                <Route path="/login/" exact component={LogIn} />
                <Route path="/balance/" exact component={Balance} />
                <Route path="/withdraw/" exact component={Withdraw} />
                <Route path="/deposit/" exact component={Deposit} />
            </UserContext.Provider>
        </HashRouter>
    );
}


ReactDOM.render(

    <Spa/>,
    document.getElementById('root')
)