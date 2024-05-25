import SectionForm from "../components/organisms/SectionForm";

import StudentListSection from "../components/organisms/StudentListSection";
import './Home.css'
function Home() {
    return ( 
        <div id="login-home">
            <SectionForm/>
            <StudentListSection></StudentListSection>

        </div>
     );
}

export default Home;