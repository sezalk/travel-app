import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

function About(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid" 
        heroImg="https://plus.unsplash.com/premium_photo-1664116707678-a2f8e7785663?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="About"
        
        // url="/about
        btnClass="hide"
        />
        
        </>
    )

}

export default About;