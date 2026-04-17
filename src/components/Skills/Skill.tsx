import { AiOutlineJavaScript } from 'react-icons/ai'
import './skill.scss'
import { FaCode } from 'react-icons/fa6'
import { TbBrandTypescript, TbBrandVercel, TbDeviceDesktop, TbLayersIntersect } from 'react-icons/tb'
import { FiFigma, FiGithub } from 'react-icons/fi'
import { SiSass } from 'react-icons/si'

const Skill = () => {
    return (
        < >
            <h1 className="header_text_title skill_title">
                My   <span className="Shamshod">Skills</span>
            </h1>
            <div className="skill">

                <div className="line skill_line"></div>
                <div className="skill_container">

                    <div className="skill_card">
                        <div className="kard">
                            <div className="kard__top">
                                <div className="kard__icon">
                                    <FaCode />
                                </div>
                                <h2 className="kard__title">React</h2>
                            </div>

                            <p className="kard__text">Proficiency</p>

                            <div className="kard__progress">
                                <div className="kard__progress-fill" style={{ width: "80%" }}></div>
                            </div>

                            <span className="kard__percent">80%</span>
                        </div>


                        <div className="kard">
                            <div className="kard__top">
                                <div className="kard__icon">
                                    <AiOutlineJavaScript />
                                </div>
                                <h2 className="kard__title">JavaScript</h2>
                            </div>

                            <p className="kard__text">Proficiency</p>

                            <div className="kard__progress">
                                <div className="kard__progress-fill" style={{ width: "70%" }}></div>
                            </div>

                            <span className="kard__percent">70%</span>
                        </div>


                        <div className="kard">
                            <div className="kard__top">
                                <div className="kard__icon">
                                    <TbBrandTypescript />
                                </div>
                                <h2 className="kard__title">TypeScript</h2>
                            </div>

                            <p className="kard__text">Proficiency</p>

                            <div className="kard__progress">
                                <div className="kard__progress-fill" style={{ width: "70%" }}></div>
                            </div>

                            <span className="kard__percent">70%</span>
                        </div>

                    </div>
                    <div className="skill_cardd">
                        <div className="kard">
                            <div className="kard__top">
                                <div className="kard__icon">
                                    <FiGithub />
                                </div>
                                <h2 className="kard__title">Git</h2>
                            </div>

                            <p className="kard__text">Proficiency</p>

                            <div className="kard__progress">
                                <div className="kard__progress-fill" style={{ width: "70%" }}></div>
                            </div>

                            <span className="kard__percent">90%</span>
                        </div>


                        <div className="kard">
                            <div className="kard__top">
                                <div className="kard__icon">
                                    <SiSass />
                                </div>
                                <h2 className="kard__title">Scss/css</h2>
                            </div>

                            <p className="kard__text">Proficiency</p>

                            <div className="kard__progress">
                                <div className="kard__progress-fill" style={{ width: "100%" }}></div>
                            </div>

                            <span className="kard__percent">100%</span>
                        </div>


                        <div className="kard">
                            <div className="kard__top">
                                <div className="kard__icon">
                                    <TbLayersIntersect />
                                </div>
                                <h2 className="kard__title">UI/UX Design</h2>
                            </div>

                            <p className="kard__text">Proficiency</p>

                            <div className="kard__progress">
                                <div className="kard__progress-fill" style={{ width: "90%" }}></div>
                            </div>

                            <span className="kard__percent">90%</span>
                        </div>

                    </div>
                    <div className="skill_carddd">

                        <div className="kard">
                            <div className="kard__top">
                                <div className="kard__icon">
                                    <FiFigma />
                                </div>
                                <h2 className="kard__title">Figma</h2>
                            </div>

                            <p className="kard__text">Proficiency</p>

                            <div className="kard__progress">
                                <div className="kard__progress-fill" style={{ width: "75%" }}></div>
                            </div>

                            <span className="kard__percent">75%</span>
                        </div>

                        <div className="kard">
                            <div className="kard__top">
                                <div className="kard__icon">
                                    <TbDeviceDesktop />
                                </div>
                                <h2 className="kard__title">Responsive</h2>
                            </div>

                            <p className="kard__text">Proficiency</p>

                            <div className="kard__progress">
                                <div className="kard__progress-fill" style={{ width: "100%" }}></div>
                            </div>

                            <span className="kard__percent">100%</span>
                        </div>


                        <div className="kard">
                            <div className="kard__top">
                                <div className="kard__icon">
                                    <TbBrandVercel />
                                </div>
                                <h2 className="kard__title">Vercel</h2>
                            </div>

                            <p className="kard__text">Proficiency</p>

                            <div className="kard__progress">
                                <div className="kard__progress-fill" style={{ width: "80%" }}></div>
                            </div>

                            <span className="kard__percent">80%</span>
                        </div>

                    </div>



                </div>

                <div className="skill_last">
                    <h2 className="skill_last_title">
                        Additional Expertise
                    </h2>
                    <div className="expertise">
                        <p className="expertise_text">
                            Netlify
                        </p>
                        <p className="expertise_text">
                            Vercel
                        </p>
                        <p className="expertise_text">
                            I-18n
                        </p>
                        <p className="expertise_text">
                            React Query
                        </p>
                        <p className="expertise_text">
                            React Router
                        </p>
                        <p className="expertise_text">
                            HTML
                        </p>
                        <p className="expertise_text">
                            HTML 5
                        </p>
                        <p className="expertise_text">
                            3D-Max
                        </p>
                        <p className="expertise_text">
                            Word
                        </p>
                        <p className="expertise_text">
                            Excel
                        </p>
                        <p className="expertise_text">
                            GitHub
                        </p>
                        <p className="expertise_text">
                            SEO
                        </p>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Skill