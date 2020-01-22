import { BigNumber } from '@0x/utils';
import { TokenPrice } from '../util/types';

const ETH_MARKET_PRICE_API_ENDPOINT = 'https://api.coinmarketcap.com/v1/ticker/ethereum/';
const TOKEN_MARKET_PRICE_API_ENDPOINT = 'https://min-api.cryptocompare.com/data/pricemulti?tsyms=USD&fsyms=';

export const getMarketPriceEther = async (): Promise<BigNumber> => {
    const promisePriceEtherResolved = await fetch(ETH_MARKET_PRICE_API_ENDPOINT);
    if (promisePriceEtherResolved.status === 200) {
        const data = await promisePriceEtherResolved.json();
        if (data && data.length) {
            const item = data[0];
            const priceTokenUSD = new BigNumber(item.price_usd);
            return priceTokenUSD;
        }
    }

    return Promise.reject('Could not get ETH price');
};

export const getMarketPrice = async (symbols: string[]): Promise<TokenPrice[]> => {
    const finalUrl =
        TOKEN_MARKET_PRICE_API_ENDPOINT +
        symbols
            .map(symbol => {
                return symbol.toLowerCase() === 'weth' ? 'eth' : symbol;
            })
            .join(',');
    const pricesResolved = await fetch(finalUrl);
    var prices: TokenPrice[] = [];
    if (pricesResolved.status === 200) {
        const data = await pricesResolved.json();
        const getTokenPrice = (searchSymbol: string, addSymbol: string, data: any): TokenPrice => {
            if (data[searchSymbol]) {
                return {
                    symbol: addSymbol,
                    price: new BigNumber(data[searchSymbol].USD),
                };
            } else {
                return {
                    symbol: addSymbol,
                    price: new BigNumber(0),
                };
            }
        };
        symbols.forEach(symbol => {
            if (symbol.toLowerCase() === 'weth') {
                prices.push(getTokenPrice('ETH', symbol, data));
            } else {
                prices.push(getTokenPrice(symbol.toUpperCase(), symbol, data));
            }
        });
    }
    return prices;
};
