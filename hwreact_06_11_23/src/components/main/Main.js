import Section1 from "../section1/Section1"
import Section2 from "../section2/Section2"
import "./main.css"

function Main() {
    return(
        <main>
            <h1>Main</h1>
            <div className="section">
                    <Section1 />
                    <Section2 />
            </div>
        </main>
    )
}

export default Main