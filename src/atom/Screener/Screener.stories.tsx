/**
 * Screener Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.01 Fri 00:00:12
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import { MediaProps, ScreenerProps } from './Screener.types';

import styles from '../../stories.module.scss';

import Screener from '.';

export default {
	component: Screener,
	title: 'Atom/Screener'
} as ComponentMeta<typeof Screener>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {ScreenerProps} args: ScreenerProps 인터페이스
 *
 * @returns {ComponentStory<typeof Screener>} ComponentStory 객체
 */
function getTemplate(args: ScreenerProps): ComponentStory<typeof Screener>
{
	return (
		<section className={cn('root')}>
			<Screener {...args} />

			<div className={cn('row')}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati repudiandae sapiente sunt similique neque odio dolorem, ducimus magni molestiae dignissimos ut esse ad. Iure vel repellendus consequuntur repellat veniam!</p>
			</div>

			<div className={cn('row')}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati repudiandae sapiente sunt similique neque odio dolorem, ducimus magni molestiae dignissimos ut esse ad. Iure vel repellendus consequuntur repellat veniam!</p>
			</div>

			<div className={cn('row')}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati repudiandae sapiente sunt similique neque odio dolorem, ducimus magni molestiae dignissimos ut esse ad. Iure vel repellendus consequuntur repellat veniam!</p>
			</div>

			<div className={cn('row')}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati repudiandae sapiente sunt similique neque odio dolorem, ducimus magni molestiae dignissimos ut esse ad. Iure vel repellendus consequuntur repellat veniam!</p>
			</div>

			<div className={cn('row')}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati repudiandae sapiente sunt similique neque odio dolorem, ducimus magni molestiae dignissimos ut esse ad. Iure vel repellendus consequuntur repellat veniam!</p>
			</div>

			<div className={cn('row')}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati repudiandae sapiente sunt similique neque odio dolorem, ducimus magni molestiae dignissimos ut esse ad. Iure vel repellendus consequuntur repellat veniam!</p>
			</div>

			<div className={cn('row')}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati repudiandae sapiente sunt similique neque odio dolorem, ducimus magni molestiae dignissimos ut esse ad. Iure vel repellendus consequuntur repellat veniam!</p>
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	accent: '314159265359번째 알파카',
	height: '100vh',
	media: {
		type: 'video',
		url: 'https://user-images.githubusercontent.com/50317129/168126184-6234b129-08ce-4da0-9ff9-7f346fdd6045.mp4'
	},
	subtitle: 'Kapoo',
	title: '행복한 알파카',
	width: '100%'
} as ScreenerProps;

/**
 * 랜덤 배경 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Random(): JSX.Element
{
	const list: MediaProps[] = [
		{
			type: 'video',
			url: 'https://user-images.githubusercontent.com/50317129/168126184-6234b129-08ce-4da0-9ff9-7f346fdd6045.mp4'
		},
		{
			type: 'video',
			url: 'https://user-images.githubusercontent.com/50317129/146303669-c3e5ece9-dba0-42ab-bd4c-a18ec7ce62d5.mp4'
		},
		{
			type: 'video',
			url: 'https://user-images.githubusercontent.com/50317129/168413361-6cb42f92-8f2c-4cf1-a00e-4a7edc57992c.mp4'
		},
		{
			type: 'video',
			url: 'https://user-images.githubusercontent.com/50317129/146303814-2736dc05-ed07-4884-9cb9-d71df4df65e9.mp4'
		}
	];

	return (
		<section className={cn('root')}>
			<Screener
				accent='다른 페이지로 갔다오거나 새로고침하면'
				media={list}
				subtitle='배경이 바뀌어요!'
				title='랜덤 배경 효과'
			/>

			<div className={cn('row')}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati repudiandae sapiente sunt similique neque odio dolorem, ducimus magni molestiae dignissimos ut esse ad. Iure vel repellendus consequuntur repellat veniam!</p>
			</div>

			<div className={cn('row')}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati repudiandae sapiente sunt similique neque odio dolorem, ducimus magni molestiae dignissimos ut esse ad. Iure vel repellendus consequuntur repellat veniam!</p>
			</div>

			<div className={cn('row')}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati repudiandae sapiente sunt similique neque odio dolorem, ducimus magni molestiae dignissimos ut esse ad. Iure vel repellendus consequuntur repellat veniam!</p>
			</div>

			<div className={cn('row')}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati repudiandae sapiente sunt similique neque odio dolorem, ducimus magni molestiae dignissimos ut esse ad. Iure vel repellendus consequuntur repellat veniam!</p>
			</div>

			<div className={cn('row')}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati repudiandae sapiente sunt similique neque odio dolorem, ducimus magni molestiae dignissimos ut esse ad. Iure vel repellendus consequuntur repellat veniam!</p>
			</div>

			<div className={cn('row')}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati repudiandae sapiente sunt similique neque odio dolorem, ducimus magni molestiae dignissimos ut esse ad. Iure vel repellendus consequuntur repellat veniam!</p>
			</div>

			<div className={cn('row')}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati repudiandae sapiente sunt similique neque odio dolorem, ducimus magni molestiae dignissimos ut esse ad. Iure vel repellendus consequuntur repellat veniam!</p>
			</div>
		</section>
	);
}