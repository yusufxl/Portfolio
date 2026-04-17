
import "/src/assets/sass/notfound.scss";
import FloatingLines from './../components/FloatingLines/FloatingLines';
import Header from '../components/Header/Header';
 
 
const Home = () => {

  return (
    <>


      <div className="page">

        <div className="bg">
          <FloatingLines
            enabledWaves={["bottom", "middle", "top"]}
            lineCount={5}
            lineDistance={6.5}
            bendRadius={12}
            bendStrength={0.5}
            interactive={true}
            parallax={true}
          />
        </div>

        <Header />

      </div>


    </>
  )
}

export default Home