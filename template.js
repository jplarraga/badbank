function Template({
    title,
    bgcolor,
    txtcolor,
    header,
    showImage,
    showName,
    showEmail,
    showPassword,
    showAddAccountButton,
    showLogInButton
}) {
    const [show, setShow] = React.useState('true');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [status, setStatus] = React.useState('');

    const ctx = React.useContext(UserContext);


    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }


    function validate(field, label){
        if(!field) {
            setStatus('Error: '+label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }


    function handleCreate(){
        console.log(name,email,password);
        if(!validate(name,     'name'))     return;
        if(!validate(email,    'email'))    return;
        if(!validate(password, 'password')) return;
        ctx.users.push({name,email,password,balance:100});
        setShow(false);
    }

    function handleValidation(){
        console.log(ctx.users[0].email);
        if(ctx.users[0].email === email && ctx.users[0].password === password){
            setShow(false);
        }
        
    }



    
    return(
      <Card
        title={title}
        bgcolor={bgcolor}
        txtcolor={txtcolor}
        header={header}
        body={ 
            show ? (
                <div>
                    {
                        showImage ? (
                            <>
                            <img src="bank.png" className="img-fluid" alt="Responsive image"/>
                            </>
                        ) : (
                            <>
                            </>
                        )
                    }
                    {
                        showName ? (
                            <>
                            Name <br/>
                            <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)}/>
                            </>
                        ) : (
                            <>
                            </>
                        )
                    }
                    {
                        showEmail ? (
                            <>
                            Email <br/>
                            <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
                            </>
                        ) : (
                            <>
                            </>
                        )
                    }
                    {
                        showPassword ? (
                            <>
                            Password <br/>
                            <input type="input" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
                            </>
                        ) : (
                            <>
                            </>
                        )
                    }
                    {
                        showAddAccountButton ? (
                            <div id="container">
                            <button type="submit" className="btn btn-light mt-3" onClick={handleCreate}>Create Account</button>
                            </div>
                        ) : (
                            <>
                            </>
                        )
                    }
                    {
                        showLogInButton ? (
                            <div id="container">
                            <button type="submit" className="btn btn-light mt-3" onClick={handleValidation}>Login</button>
                            </div>
                        ) : (
                            <>
                            </>
                        )
                    }
                </div>
                
                
                ) : (
                <>
                {showName &&
                (<h5>Success!</h5>)
                }
                
                {showName && 
                (<button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>)
                }

                {showPassword && 
                (<h5>Welcome {ctx.users[0].name}!</h5>)
                }


                    
                </>)
        }


      
      
      />
    );
}