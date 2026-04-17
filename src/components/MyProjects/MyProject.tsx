import React from "react";
import "./myproject.scss";

type Props = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
};

const MyProject: React.FC<Props> = ({
  title,
  description,
  tags,
  link,
  image,
}) => {

  return (
    < >
 
      <div className="Project">
        <div className="conatiner">


          <div className="project_box">
            <a href={link} className="card" target="_blank">

              {image ? (
                <div
                  className="card_top"
                  style={{ backgroundImage: `url(${image})` }}
                />
              ) : (
                <div className="card_top card_top--fallback">
                  <span>{title.charAt(0)}</span>
                </div>
              )}

              <div className="card_bottom">
                <h3>{title}</h3>
                <p>{description}</p>

                <div className="card_tags">
                  {tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <div className="card_link">View Project →</div>
              </div>
            </a>
          </div>
        </div>


      </div>
    </>






  );
};

export default MyProject;