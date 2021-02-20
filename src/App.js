import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
            <Footer/>
        </div>

    );
}

const Header = () => {
    return (
        <div className="head">
            <a href="javascript: void(0)">Home</a>
            <a href="javascript: void(0)">News Feed</a>
            <a href="javascript: void(0)">Messages</a>
        </div>
    )
}

const Technologies = () =>{
    return (
        <ul>
            <li>react</li>
            <li>css</li>
            <li>html</li>
            <li>js</li>
        </ul>
    )
}

const Footer = () => {
    return(
        <p className="head">Я это пока понимаю и это радует</p>
    )
}






export default App;

