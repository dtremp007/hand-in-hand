import type { SubmitFunction } from '@sveltejs/kit';

export function withPending(
	setPending: (pending: boolean) => void,
	inner?: SubmitFunction
): SubmitFunction {
	return (input) => {
		setPending(true);
		const followup = inner?.(input);

		return async (result) => {
			try {
				if (typeof followup === 'function') {
					await followup(result);
				} else {
					await result.update();
				}
			} finally {
				setPending(false);
			}
		};
	};
}
