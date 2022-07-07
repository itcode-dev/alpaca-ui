/**
 * 스크리너 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.06.30 Thu 21:33:33
 */

import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Screener.module.scss';
import { ScreenerProps } from './Screener.types';

/**
 * 스크리너 컴포넌트 JSX 반환 메서드
 *
 * @param {ScreenerProps} param0: ScreenerProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Screener({ title, accent, subtitle, media, width, height, className, style, ...props }: ScreenerProps): JSX.Element
{
	const cn = classNames.bind(styles);
	let customStyle = style;

	// 기 선언된 스타일이 있을 경우
	if (customStyle)
	{
		// width가 있을 경우
		if (width)
		{
			customStyle.width = width;
		}

		// height가 있을 경우
		if (height)
		{
			customStyle.height = height;
		}
	}

	// 기 선언된 스타일이 없을 경우
	else
	{
		customStyle = { height, width };
	}

	const initMedia = Array.isArray(media) ? media[0] : media;

	const [ state, setState ] = useState(initMedia);

	useEffect(() =>
	{
		if (Array.isArray(media))
		{
			const index = Math.floor(Math.random() * media.length);
			const item = media[index];

			setState(item);
		}
	}, [ media ]);

	return (
		<article className={cn('screener', className)} data-name='Screener' style={customStyle} {...props}>
			<div className={cn('media-wrapper')}>
				{state.type === 'image' ? <img alt='media' className={cn('media', state.type)} src={state.url} style={customStyle} /> : null}
				{state.type === 'video' ? <video className={cn('media', state.type)} src={state.url} style={customStyle} autoPlay loop muted /> : null}

				<div className={cn('media-dimmer')} style={customStyle} />
			</div>

			<div className={cn('text-wrapper')}>
				<h1 className={cn('text', 'title')}>{title}</h1>
				<h3 className={cn('text', 'accent')}>{accent}</h3>
				<h3 className={cn('text', 'subtitle')}>{subtitle}</h3>
			</div>
		</article>
	);
}