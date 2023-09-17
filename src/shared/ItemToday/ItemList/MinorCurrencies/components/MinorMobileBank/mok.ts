export interface CurrentsRestrictions{
[key: string] : {
    buy: number;
    sale: number;
}
}


export const CNYRestrictions:CurrentsRestrictions[] = [
        {'до 10 000.00 $':
        {
            buy: 0 ,
            sale: 0
        } },
        {'до 100 000.00 $':
        {
            buy: 0.6 ,
            sale: 0.7
        }},
        {'до 1000 000.00 $':
        {
            buy: 0.7 ,
            sale: 0.8
        }},
        {'от 1000 000.00 $':
        {
            buy: 0.8 ,
            sale: 0.9
        }}
        ]
    

export const USDRestrictions:CurrentsRestrictions[] = [
            {'до 85.00 $':
            {
                buy: 0 ,
                sale: 0
            } },
            {'до 425.00 $':
            {
                buy: 0 ,
                sale: 0
            }},
            {'до 850.00 $':
            {
                buy: 0 ,
                sale: 0
            }},
            {'до 8 500.00 $':
            {
                buy: 0 ,
                sale: 0.01
            }},
            {'до 42 500.00 $':
            {
                buy: 0 ,
                sale: 0.01
            }},
            {'до 85 000.00 $':
            {
                buy: 0 ,
                sale: 0.01
            }},
            {'до 425 000.00 $':
            {
                buy: 0.8 ,
                sale: 0.01
            }},
            {'до 850 000.00 $':
            {
                buy: 0.8 ,
                sale: 0.01
            }},
            {'от 850 000.00 $':
            {
                buy: 0.8 ,
                sale: 0.01
            }}
            ]