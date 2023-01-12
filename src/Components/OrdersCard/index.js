import downArrow from "../../assets/downArrow.svg";
import {
  ContainerCard,
  ContentCard,
  ShowDetails,
  ListOrdersItem,
} from "./style";


export function OrdersCard({order}) {
  const {movies} = order;
  const totalCost = movies.reduce((previousValue, currentValue) => { return previousValue + currentValue.vote_average * 10 }, 0)

  return (
    <ContainerCard>
      <ContentCard>
        <span>01/01/26 - {order.data.toString()}</span>
        <span>
          R$ {totalCost}
          <button type="button">
            <img src={downArrow} alt="seta para baixo"></img>
          </button>
        </span>
      </ContentCard>
      <ShowDetails>
        <ListOrdersItem>
          {movies.map((movie) => {
            return (
              <li>
                <span>{movie.original_title}</span>
                <span>R$ {movie.vote_average * 10}</span>
              </li>
            );
          })}
        </ListOrdersItem>
      </ShowDetails>
    </ContainerCard>
  );
}
