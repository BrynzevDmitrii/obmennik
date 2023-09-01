import { FunctionComponent } from "react";
import { useAppSelector } from "../../../../hook";
import { MinorOffice } from "./components/MinorOffice/MinorOffice";
import { MinorOfficeNonCash } from "./components/MinorOfficeNonCash/MinorOfficeNonCash";


export const MinorCurrencies: FunctionComponent = () => {
  const date = useAppSelector((state) => state.currentList.currentList);
  const selectCurrent = useAppSelector(
    (state) => state.CurrencyConverter.selectedWay
  );

  return (
    <>
      {date === undefined || null ? (
        "Loading ..."
      ) : (
        Object.entries(date).map((j, index) => (
          <ul key={index}>
            <li>
              {selectCurrent === "В офисе (наличные)" ? (
                <MinorOffice data={j[1]} />
              ) : (
                ""
              )}
              {selectCurrent === "В офисе (безналично)" ? (
                <MinorOfficeNonCash data={j[1]} />
              ) : (
                ""
              )}
              {/* {selectCurrent === 'В интернет банке и мобильном банке' ? <MobileBank data={j[1]} /> : ''} */}
            </li>
        </ul>
        ))
          
      )}
    </>
  );
};
