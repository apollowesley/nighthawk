import TrackModel from '../models/TrackModel';
import { List } from 'immutable';

/**
 * Fisher-Yates-shuffle for Immutable.js Lists
 * @param {[Immutable.List]} List
 * @return {[Immutable.List]} Shuffled List
 */
export const shuffleList = (list: List<TrackModel>): List<TrackModel> => {
	const shuffled: List<TrackModel> = list.withMutations((mutable: List<TrackModel>) => {

		let current: number = mutable.count();
		let temp: TrackModel;
		let swap: number;

		while (current) {
			swap = Math.floor(Math.random() * current--);

			//Swap with random element
			temp = mutable.get(current)!;
			mutable.set(current, mutable.get(swap)!);
			mutable.set(swap, temp);
		}

	});

	return shuffled;
};