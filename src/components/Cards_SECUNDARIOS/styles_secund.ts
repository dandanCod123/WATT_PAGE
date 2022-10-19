import styled from "styled-components";
import dasnboardicon from '../../assets/Images/dashboard.png';
import graficoIcon from '../../assets/Images/grafico.png';
import NotaIcon from '../../assets/Images/nota_fiscal.png';
import PlugIcon from '../../assets/Images/plug.png';


///// GERAL-----------------------------------------------

export const DIV =  styled.div`
margin-top: 140px;
 display: grid;
 grid-template-columns: repeat(2, 1fr);


height:630px;
width: 665px;

margin-left: 55px;


`;
//////////
export const Div_Header = styled.div`
/* left: 20.98%;
right: 76.8%;
top: 0.76%;
bottom: 99.1%; */
margin-top:20px ;
text-align:center;

font-family: 'Lato';
 font-style: normal;
 font-weight: 700;
 font-size: 25px;
 line-height: 30px;
 /* identical to box height */
 color: #333333;

`;

export const DIV_Header2 = styled.div`
/* left: 20.98%;
right: 76.8%;
top: 0.76%;
bottom: 99.1%; */
margin-top:-15px ;
text-align:center;

font-family: 'Lato';
 font-style: normal;
 font-weight: 700;
 font-size: 25px;
 line-height: 30px;
 /* identical to box height */
 color: #333333;
`;

/////////

//////// DIV`s CARDS(DASHBOARD/GRAFICO/PLUG/NOTA_FISCAL)-------------

export const Div_Dashboard = styled.div`

height: 295px;
width: 295px;

margin-right:75px;
margin-bottom: 40px;
margin-bottom: 10px;
//background: linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%);
`;

export const Div_Plug = styled.div`

height: 295px;
width: 295px;

margin-right:75px;
margin-bottom: 40px;
`;


export const Div_Grafico = styled.div`


height: 295px;
width: 295px;

margin-right:75px;
margin-bottom: 40px;

`;

export const Div_Nota = styled.div`
height: 295px;
width: 295px;

`;


///// ICONS -------------------------------------------------

export const Icon_Dashboard = styled.img`
  background-image:url(${dasnboardicon});
  background-position:center;

  height: 40px;
  width: 45.71500015258789px;
  margin-left: 125px;
  margin-top: 26px;
  top: 234px;
  border-radius: 0px;

`;

export const Icon_Grafico = styled.img`
 background-image:url(${graficoIcon});
 background-position:center;


 height: 40px;
width: 53.33399963378906px;
margin-left: 121px;
margin-top: 26px;
top: 569px;
border-radius: 0px;

`;

export const Icon_plug = styled.img`
 background-image:url(${PlugIcon});
 background-position:center;

 height: 40px;
width: 30px;

margin-left: 133px;
margin-top: 13px;
top: 254px;
border-radius: 0px;
`;

export const Icon_Nota = styled.img`
 background-image:url(${NotaIcon});
 background-position:center;

 height: 40.00403594970703px;
width: 30.000003814697266px;
left: 2809px;
top: 570px;
margin-left: 133px;
margin-top: 27px;
border-radius: 0px;

`;

/////// BOTÃO  -----------------------

export const Button = styled.button`

height: 32px;
width: 159px;


border-radius: 0px;
margin-bottom: 20px;

margin-left: 68px;


background: #F7CB07;
`; 

export const Button2 = styled.button`
 
height: 32px;
width: 159px;


border-radius: 0px;
margin-bottom: 20px;
margin-top: -80px;
margin-left: 68px;


background: #F7CB07;
`;

export const Paragr_Card2 = styled.div`

margin-left: 37px;
margin-right: 30px;
margin-top: 26px;

margin-bottom: 32px;
max-width: 228ch;
height: 72px;
overflow:hidden;


text-align: center;

font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: clamp(0.6em , 0.9em , 1em);
line-height: 18px;



color: #333333;

`;
