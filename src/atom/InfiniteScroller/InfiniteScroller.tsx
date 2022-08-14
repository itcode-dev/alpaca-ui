/**
 * InfiniteScroller 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.11 Thu 22:58:00
 */

import { useCallback, useEffect, useMemo, useState } from 'react';

import { InfiniteScrollerProps } from './InfiniteScroller.types';

import { InfiniteScrollerContext } from '../../common';

export default function InfiniteScroller({ count = 0, total, scrollOffset, onEndScroll, ...props }: InfiniteScrollerProps): JSX.Element
{
	const [ countState, setCountState ] = useState(count);

	const valueMemo = useMemo(() => ({
		countState,
		setCountState
	}), [ countState, setCountState ]);

	const { countState: countStateMemo, setCountState: setCountStateMemo } = valueMemo;

	const handleEndScroll = useCallback(() =>
	{
		// 최대값에 도달하지 않았을 경우
		if (total > count)
		{
			const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

			if (scrollTop + clientHeight >= scrollHeight - scrollOffset)
			{
				setCountStateMemo((state) => state + 1);
				onEndScroll(countStateMemo);
			}
		}
	}, [ count, total, scrollOffset, onEndScroll, countStateMemo, setCountStateMemo ]);

	useEffect(() =>
	{
		window.addEventListener('scroll', handleEndScroll);

		return () =>
		{
			window.removeEventListener('scroll', handleEndScroll);
		};
	}, [ handleEndScroll ]);

	useEffect(() =>
	{
		if (setCountStateMemo)
		{
			setCountStateMemo(count);
		}
	}, [ count, setCountStateMemo ]);

	return (
		<InfiniteScrollerContext.Provider value={valueMemo}>
			<div data-component='InfiniteScroller' {...props} />
		</InfiniteScrollerContext.Provider>
	);
}