import { BigNumber } from '@0x/utils';

import { isWeth } from './known_tokens';

export const tokenAmountInUnitsToBigNumber = (amount: BigNumber, decimals: number): BigNumber => {
    const decimalsPerToken = new BigNumber(10).pow(decimals);
    return amount.div(decimalsPerToken);
};

export const tokenAmountInUnits = (amount: BigNumber, decimals: number, toFixedDecimals = 2): string => {
    return tokenAmountInUnitsToBigNumber(amount, decimals).toFixed(toFixedDecimals);
};

export const tokenAmountInUSD = (
    amount: BigNumber,
    decimals: number,
    rate: BigNumber | null,
    toFixedDecimals = 2,
): string => {
    const tokenCount = tokenAmountInUnitsToBigNumber(amount, decimals);
    if (rate) {
        return tokenCount.multipliedBy(rate).toFixed(toFixedDecimals);
    } else {
        return new BigNumber(0).toFixed(toFixedDecimals);
    }
};

export const unitsInTokenAmount = (units: string, decimals: number): BigNumber => {
    const decimalsPerToken = new BigNumber(10).pow(decimals);

    return new BigNumber(units).multipliedBy(decimalsPerToken);
};

export const tokenSymbolToDisplayString = (symbol: string): string => {
    return isWeth(symbol) ? 'wETH' : symbol.toUpperCase();
};
