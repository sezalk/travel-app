// import "./TripStyles.css"
import TripData from "./TripData";
function Trip(){
    return(
        
        <div className="trip">
            <h1>Recent Trips</h1>
            <div className="tripcard">
                <TripData image="https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kb25lc2lhfGVufDB8fDB8fHww"
                heading="Trip to Indonesia"
                text="Indonesia, an archipelago of over 17,000 islands, 
                boasts diverse cultures, lush landscapes, and vibrant
                biodiversity. From ancient temples to pristine beaches, 
                it captivates with its rich heritage and natural beauty."/>

                <TripData image="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWF8ZW58MHx8MHx8fDA%3D"
                heading="Trip to India"
                text="India, a land of contrasts, showcases rich history, 
                diverse cultures, and stunning landscapes from the majestic 
                Himalayas to the serene backwaters of Kerala, offering a tapestry
                 of experiences for travelers."/>

                <TripData image="https://plus.unsplash.com/premium_photo-1690527101950-5bc2b81ca773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3JpJTIwbGFua2F8ZW58MHx8MHx8fDA%3D"
                heading="Trip to Sri Lanka"
                text="Sri Lanka, known as the Pearl of the Indian Ocean,
                entices with its ancient ruins, lush tea plantations, and 
                pristine beaches. Its warm hospitality and vibrant culture 
                leave a lasting impression on visitors."/>

            </div>
            
        </div>
        
        
    );
}

export default Trip;