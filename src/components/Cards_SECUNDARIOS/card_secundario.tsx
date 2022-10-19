import {DIV ,
     Div_Dashboard,
     Div_Plug,
     Div_Grafico,
     Div_Header,
     DIV_Header2,
      Div_Nota,
      Button2,
     Paragr_Card2,
     Icon_Dashboard,
     Icon_Grafico,
     Icon_Nota,
     Icon_plug,
     Button} from './styles_secund'


export function CardsSecund(){

return(
    <DIV>
        <Div_Dashboard>
        
           <Div_Header> DASHBOARD</Div_Header>
          <Icon_Dashboard/>
         
            
          <Paragr_Card2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque dictum gravida nibh, tristique ultrices 
          ligula rhoncus ac. 
              </Paragr_Card2>

  
          
          <Button>VEJA MAIS</Button>

    </Div_Dashboard>


    <Div_Plug>

    <Div_Header>
        <DIV_Header2> Análise de Consumo e Geração</DIV_Header2>
    </Div_Header>
        <Icon_plug/>
   
        <Paragr_Card2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque dictum gravida nibh, tristique ultrices ligula rhoncus ac. 
            </Paragr_Card2>

        
        <Button2>VEJA MAIS</Button2>
    </Div_Plug>



    <Div_Grafico>

    <Div_Header>Gráficos </Div_Header>
        <Icon_Grafico/>
       
        <Paragr_Card2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque dictum gravida nibh, 
            tristique ultrices ligula rhoncus ac. 
            </Paragr_Card2>
     
        
        <Button>VEJA MAIS</Button>
    </Div_Grafico>

    
   <Div_Nota>
   <Div_Header>Simulação de Fatura </Div_Header>
        <Icon_Nota/>

        <Paragr_Card2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque dictum gravida nibh, 
        tristique ultrices ligula rhoncus ac. 
        </Paragr_Card2>

        
        <Button>VEJA MAIS</Button>
   </Div_Nota>

    </DIV>
   
)

}