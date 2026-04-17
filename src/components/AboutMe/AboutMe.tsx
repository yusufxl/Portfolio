import { BiUser } from "react-icons/bi";
import { IoReaderOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import "./aboutme.scss";
import { MdOutlineWorkOutline } from "react-icons/md";
import Im from "../../assets/img/Im.png";



const AboutMe = () => {
    const developer = {
        name: "Yusuf",
        language: "Uz, Ru, Kz",
        skills: ["React", "CSS", "HTML"],
        passion: "UI/UX",
        listen: "Central Cee",
        Movie: "Money Heist",
        sport: "Football/Barcelona"
    };

    return (
        <>
            <div className="about">
                <div className="container">

                    <h1 className="header_text_title project_titlee ">
                        About <span className="Shamshod">Me</span>
                    </h1>
                    <div className="line about_line"></div>


                    <div className="about_box animate-up delay-4">
                        <div className="cardd animate-up delay-4">
                            <div className="dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>

                            <pre className="code">
                                {`const developer = {
       name: "${developer.name}",
       language: "${developer.language}",
       skills: ["${developer.skills.join('", "')}"],
       passion: "${developer.passion}",
       listen: "${developer.listen}",
       Movie: "${developer.Movie}",
       sport: "${developer.sport}"
};`}
                            </pre>
                        </div>

                        <img src={Im} alt="" className="Im_img" />


                    </div>

                    <div className="yusuf_box">
                        <div className="about_text-box  animate-up delay-3">

                            <h2 className="me_title">
                                Experience <MdOutlineWorkOutline />
                            </h2>
                            <p className="about_yusuf    animate-up delay-2">
                                Я окончил университет в Казахстане по направлению IT и имею высшее образование. На сегодняшний день я приобрёл опыт, участвуя в различных проектах и видах профессиональной деятельности. В рамках официальной работы я трудился в компаниях Uztelecom и Infotech Innovation в должности специалиста по оптимизации сайтов.
                                <br />
                                <br />

                                Кроме того, я участвовал во множестве фриланс-проектов, что позволило мне значительно укрепить практические навыки. В процессе прохождения практики в различных компаниях я развил умение решать реальные задачи, работать в команде и применять современные технологии.
                                <br />
                                <br />
                                В будущем я планирую постоянно развиваться, изучать новые технологии и повышать свой профессиональный уровень, чтобы стать сильным Frontend и Backend разработчиком.
                            </p>

                        </div>
                        <div className="experience animate-up delay-4">
                            <h2 className="experience_title">
                                <BiUser /> Frontend Developer & UI/UX Enthusiast
                            </h2>
                            <div className="about_boxx animate-up delay-4">

                                <p className="header_t   animate-up delay-2">
                                    Ассаламу алейкум Меня зовут Юсуф. Я изучал веб-разработку, а именно направление Frontend, в Proweb IT Академии. Также я участвовал в 1–2 реальных проектах.
                                    <IoReaderOutline />
                                </p>

                                <p className="header_t  animate-up delay-2">
                                    <br />
                                    Я специализируюсь на React, JavaScript и адаптивной (responsive) верстке. Мне нравится создавать чистые и удобные для пользователей интерфейсы, и я всегда стремлюсь совершенствовать свои навыки. Как развивающийся разработчик, я люблю изучать тенденции UI/UX и решать новые задачи, чтобы создавать качественный цифровой опыт.
                                    <IoReaderOutline />

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="last_box">
                        <p className="last_text animate-up delay-4">
                            если ты хочешь получить то чего нету у большинства, тренируйся с теми кто сильнее тебя, не сдавайся там где сдаются другие, и победишь там где победить нельзя... ,
                        </p>
                        <div className="phone_card">
                            <div className="phone_icon">
                                <FiPhone />
                            </div>

                            <div className="phone_text">
                                <span>Phone</span>
                                <a href="tel:+998335004510">+998 (77) 455 64 83</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AboutMe;