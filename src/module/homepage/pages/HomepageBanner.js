import Banner from "../container/homepage/banner";
import FAQ from "../container/homepage/faq";
import Numbers from "../container/homepage/number";
import Partner from "../container/homepage/partner";
import ShipperApp from "../container/homepage/shipperApp";

export const HomepageBanner=()=>{return (
    <>
        <Banner/>
        <Numbers/>
        <FAQ/>
        <ShipperApp/>
        <Partner/>
    </>
)}