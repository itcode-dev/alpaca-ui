/**
 * Screener 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.06.30 Thu 21:33:33
 */

import styles from '@alpaca/atom/Screener/Screener.module.scss';
import { ScreenerProps } from '@alpaca/atom/Screener/Screener.types';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

/**
 * Screener 컴포넌트 JSX 반환 메서드
 *
 * @param {ScreenerProps} param0: ScreenerProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Screener({ title, accent, subtitle, media, width, height, className, style, ...props }: ScreenerProps): JSX.Element
{
	const cn = classNames.bind(styles);

	// style이 유효할 경우
	if (style)
	{
		style.width = width;
		style.height = height;
	}

	// 아닐 경우
	else
	{
		style = { height, width };
	}

	const initMedia = Array.isArray(media) ? media[0] : media;

	const [ state, setState ] = useState(initMedia);

	useEffect(() =>
	{
		// 미디어 프로퍼티 값이 배열이 아닐 경우
		if (Array.isArray(media))
		{
			const index = Math.floor(Math.random() * media.length);
			const item = media[index];

			setState(item);
		}
	}, [ media ]);

	return (
		<article className={cn('screener', className)} data-component='Screener' style={style} {...props}>
			<div className={cn('media-wrapper')}>
				{state.type === 'image' ? <img alt='media' className={cn('media', state.type)} src={state.url} style={style} /> : null}
				{state.type === 'video' ? <video className={cn('media', state.type)} src={state.url} style={style} autoPlay loop muted /> : null}

				<div className={cn('media-dimmer')} style={style} />
			</div>

			<div className={cn('text-wrapper')}>
				<h1 className={cn('text', 'title')}>{title}</h1>
				<h3 className={cn('text', 'accent')}>{accent}</h3>
				<h3 className={cn('text', 'subtitle')}>{subtitle}</h3>
			</div>
		</article>
	);
}