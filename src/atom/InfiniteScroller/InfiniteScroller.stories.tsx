/**
 * InfiniteScroller Storybook 모듈
 *
 * @author RWB
 * @since 2022.08.15 Mon 02:12:01
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React, { useState, useCallback } from 'react';

import { InfiniteScrollerProps } from './InfiniteScroller.types';

import styles from '../../stories.module.scss';

import InfiniteScroller from '.';

export default {
	component: InfiniteScroller,
	title: 'Atom/InfiniteScroller'
} as ComponentMeta<typeof InfiniteScroller>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {InfiniteScrollerProps} args: InfiniteScrollerProps 인터페이스
 *
 * @returns {ComponentStory<typeof InfiniteScroller>} ComponentStory 객체
 */
function getTemplate({ ...props }: Omit<InfiniteScrollerProps, 'onEndScroll'>): ComponentStory<typeof InfiniteScroller>
{
	const [ data, setData ] = useState<number[]>([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);

	const onEndScroll = useCallback((next: number): void =>
	{
		const temp = data.slice();

		for (let i = next * 10; i < (next + 1) * 10; i += 1)
		{
			temp.push(i);
		}

		setData(temp);
	}, [ data, setData ]);

	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<p>{props.count}</p>
				<p>{props.total}</p>
				<InfiniteScroller {...props} onEndScroll={onEndScroll}>
					{data.map((item) => (
						<div
							key={Math.random()}
							style={{
								alignItems: 'center',
								backgroundColor: 'ghostwhite',
								border: '1px solid gainsboro',
								display: 'flex',
								height: 200,
								justifyContent: 'center',
								width: 200
							}}
						>
							<h1>{item}</h1>
						</div>
					))}
				</InfiniteScroller>
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = { total: 5 } as Omit<InfiniteScrollerProps, 'onEndScroll'>;