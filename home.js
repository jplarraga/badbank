function Home() {
    
  const ctx = React.useContext(UserContext);
  return(
      <div className="container">
          <Template
              txtcolor='dark'
              header="Bad Bank!"
              title=" Wlcome to Bad Bank"
              showImage={true}
          />
      </div>
  );
}