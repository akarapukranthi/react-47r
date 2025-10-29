import React from "react";
import Header from "./component/header/Header"
import Banner from "./component/sections/Banner";
import Footer from "./component/footer/Footer";

class App extends React.Component {

    render() {
        return <div>
            <Header />
            <Banner />
            <Footer />
        </div>
    }
}
export default App