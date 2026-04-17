
import MyProject from "../components/MyProjects/MyProject";



const Project = () => {

  return (
    <>
      <div style={{ width: '100%', minHeight: '800px', }}>
        <h1 className="header_text_title project_titlee">
          My <span className="Shamshod">Projects</span>
        </h1>
        <div className="line project_line"></div>

        <div className="projects_grid">
          <MyProject
            title="Qonoq Capsule"
            description="Этот сайт я сделал вместе со своим братишкой Шамшодом"
            tags={["React", "SCSS", "JS"]}
            link="https://qonoqcapsule.uz/"
            image=""
          />

          <MyProject
            title="Totembo Watch"
            description="Я сделал этот сайт самостоятельно для практики."
            tags={["React", "Scss", "JS"]}
            link="https://yusufxl.github.io/Totembo/"
            image=""
          />

          <MyProject
            title="Porsche"
            description="Я сделал этот сайт самостоятельно для практики."
            tags={["React", "Scss", "JS"]}
            link="https://vite-xi-topaz-80.vercel.app/"
            image=""
          />

          <MyProject
            title="Online Shop"
            description="Этот сайт сделан как будто это реальный проект, просто он не размещён в Google"
            tags={["React", "Scss", "TS"]}
            link=" https://shop-online-zeta.vercel.app/"
            image=""
          />



          <MyProject
            title="ClickHouse"
            description="Этот сайт сделан как будто это реальный проект, просто он не размещён в Google"
            tags={["React", "Scss", "JS"]}
            link="https://click-house-ten.vercel.app/"
            image=""
          />



          <MyProject
            title="Viu Cinema"
            description="Я сделал этот сайт самостоятельно для практики."
            tags={["React", "Scss", "JS"]}
            link="https://abdumutalovabdulaziz735.github.io/viu_cinema/"
            image=""
          />


          <MyProject
            title="Anor Furniture"
            description="Этот сайт я сделал вместе со своим братишкой Абдуллохом"
            tags={["React", "Scss", "JS"]}
            link="https://anor-furniture.vercel.app/"
            image=""
          />


          <MyProject
            title="Khamsa khotel"
            description="Этот сайт я сделал вместе со своим братишкой Шамшодом"
            tags={["React", "Scss", "JS"]}
            link="https://khamsahotel.uz/"
            image=""
          />
        </div>



      </div>


    </>
  )
}

export default Project