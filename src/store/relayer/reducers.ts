import { getType } from 'typesafe-actions';

import { RelayerState } from '../../util/types';
import * as actions from '../actions';
import { RootAction } from '../reducers';

const initialRelayerState: RelayerState = {
    orders: [],
    userOrders: [],
    isLoading: false,
};

export function relayer(state: RelayerState = initialRelayerState, action: RootAction): RelayerState {
    switch (action.type) {
        case getType(actions.setOrders):
            return { ...state, orders: action.payload };
        case getType(actions.setUserOrders):
            return { ...state, userOrders: action.payload };
        case getType(actions.initializeRelayerData):
            return action.payload;
        case getType(actions.setLoader):
            return { ...state, isLoading: true };
        case getType(actions.cancelLoader):
            return { ...state, isLoading: false};
        default:
            return state;
    }
}
