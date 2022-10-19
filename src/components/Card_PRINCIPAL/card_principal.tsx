import {Card_align,
    Div_Header,
    Text_div,
    Paragrafo_Div,
    Paragrafo2_Div,
    Paragrafo3_Div,
    Paragrafo4_DIV,
    Paragrafo5_DIV,
    Linha,
    Div_PRINCIPAL ,
    DIV_1} from './styles_pricipal'
import {CardsSecund} from '../Cards_SECUNDARIOS/card_secundario'

export function CardPrinc(){
    return(
        <DIV_1>
           <Div_PRINCIPAL>
                <Div_Header>
               Bem-vindo, João!
               </Div_Header>
{/** /////////////////////////////// */}

            <Text_div>
                <Card_align>
                Primeiros passos!
                </Card_align>
        <Linha></Linha>


                  <Paragrafo_Div>
                      Faça upload de suas últimas doze contas!
                    </Paragrafo_Div>


                <Paragrafo2_Div>
                      05/12
                   </Paragrafo2_Div>

                <Paragrafo3_Div>
                     Vá para as configurações
                     </Paragrafo3_Div>

            </Text_div>
                
        <Linha></Linha>

         <Paragrafo4_DIV>
         Confirme os dados das Unidade Consumidoras!
         </Paragrafo4_DIV>

         <Paragrafo3_Div>
             Vá para as configurações
            </Paragrafo3_Div>

        <Linha></Linha>

         <Paragrafo5_DIV>
           Crie Dashboards personalizados
         </Paragrafo5_DIV>

         <Paragrafo3_Div>
             Vá para o Dashboard
            </Paragrafo3_Div>

            </Div_PRINCIPAL>

         <CardsSecund/>
           

         </DIV_1>


    )
}