import styled from "styled-components"


const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="txt">
            <p>Select any Number</p>
            <p>Click on dice Image</p>
            <p>
                after click on dice if selected number is equal to dice number you will get some points as dice{" "}
            </p>
            <p>if you wrong guess then 2 point will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #fbf1f1;
    padding: 20px;
    margin-top: 40px;
    border-radius: 10px;
    h2{
        font-size: 24px;
    }

    .text{
        padding-top: 24px;
    }
`