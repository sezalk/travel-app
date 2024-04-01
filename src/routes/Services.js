import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

function Services(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid" 
        heroImg="https://images.unsplash.com/photo-1495555694070-b0fe5bcd2576?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Services"
        
        
        btnClass="hide"
        />
        
        </>
    )

}

export default Services;