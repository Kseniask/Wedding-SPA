import React, { useContext, useState } from "react";
import StFlexBoxContainer from "../shared/styled/StFlexBoxContainer";
import StHeader from "../shared/styled/StHeader";
import GlobalDataContext from "../context/GlobalDataContext";
import StQnAContainer from "./qna/StQnAContainer";
import { colorSystem } from "../shared/constants";
import Question from "../types/Question";

const QnA =() => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const {themeValues} = useContext(GlobalDataContext);
     
    const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
return (
    <StFlexBoxContainer>
            <StHeader fontSize="40px" color={colorSystem.defaultColorLight}>{themeValues.qna}</StHeader>
            <StQnAContainer>
                <div className="accordion">
                    {themeValues.questions.map((item: Question, index: number) => (
                        <div className="accordion-item" key={index}>
                            <div className={`accordion-question ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                                {item.question}
                            </div>
                        {activeIndex === index && (
                            <div className="accordion-answer">
                            {item.answer}
                            </div>
                            )
                        } 
                        <hr/>
                        </div>
                    ))}
                </div>

            </StQnAContainer>
    </StFlexBoxContainer>
)
}

export default QnA;