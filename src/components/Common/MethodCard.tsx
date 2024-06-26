import styled from "styled-components";

interface MethodCardProp {
  item: string;
  title: string;
  text: string;
}

export default function ContactCard({ item, title, text }: MethodCardProp) {
  return (
    <MethodCard>
      <div>
        <h1>{item}</h1>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </MethodCard>
  );
}

const MethodCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto 50px;
  padding: 20px;
  background: ${(props) => props.theme.colors["gradient-4"]};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  font-family: "Druk Wide Bold";
  font-weight: 700;

  div {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    padding: 20px;

    h1 {
      font-size: 45px;
      line-height: 50px;
      letter-spacing: 0.03em;
      background: ${(props) => props.theme.colors["gradient-1"]};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin: 0;
    }
    h2 {
      margin-left: 10px;
      margin-top: 8px;
      background: ${(props) => props.theme.colors["gradient-5"]};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  p {
    margin: 5px;
    text-align: center;
    color: ${(props) => props.theme.colors["white"]};
    font-weight: 200;
    font-family: Montserrat;
    line-height: 20px;
  }
`;
