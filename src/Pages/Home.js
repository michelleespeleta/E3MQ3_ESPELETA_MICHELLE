import KT01  from '../Images/KT01.gif'

const Home = () => {
    return (
        <main>
            <div className="greet">
                <h1>こんにちは！</h1>
                <h2>That's "Hello" and "Good Afternoon" in Japanese. Other greetings that can be used are: ヤッホー (Yoohoo), おす！ (Hey!), and よー！ (Yo!)
                </h2>
            </div>

            <div className="hs">
                <img src={KT01} className="gif"/>
            </div>
        </main>
    )
}

export default Home