import {
	createAction,
	ActionWithPayload,
	// Action,
	withMatcher,
} from '../../utils/reducer/reducers.utils';
import { ListItem } from './list.reducer';
import { LIST_TYPES } from './list.types';

export type SetCompleteItem = ActionWithPayload<LIST_TYPES.SET_COMPLETE_ITEM, ListItem[]>;

export const setCompleteItem = withMatcher(
	(items: ListItem[]): SetCompleteItem => createAction(LIST_TYPES.SET_COMPLETE_ITEM, items)
);

export type RemoveItemFromList = ActionWithPayload<LIST_TYPES.REMOVE_ITEM_FROM_LIST, ListItem[]>;

export const removeItemFromList = withMatcher(
	(items: ListItem[]): RemoveItemFromList => createAction(LIST_TYPES.REMOVE_ITEM_FROM_LIST, items)
);

export type AddItemToList = ActionWithPayload<LIST_TYPES.ADD_ITEM_TO_LIST, ListItem>;

export const addItemToList = withMatcher(
	(item: ListItem): AddItemToList => createAction(LIST_TYPES.ADD_ITEM_TO_LIST, item)
);