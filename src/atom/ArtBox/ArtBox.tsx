/**
 * 아트박스 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.11 Mon 00:29:46
 */

import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi';

import styles from './ArtBox.module.scss';
import { ArtBoxProps } from './ArtBox.types';

/**
 * 아트박스 컴포넌트 JSX 반환 메서드
 *
 * @param {FabProps} param0: FabProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function ArtBox({ media, width, height, style }: ArtBoxProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const [ state, setState ] = useState(media[0]);

	useEffect(() =>
	{
		const index = Math.floor(Math.random() * media.length);
		const item = media[index];

		setState(item);
	}, [ media ]);

	const handleChangeClick = () =>
	{
		const index = Math.floor(Math.random() * media.length);
		const item = media[index];

		setState(item);
	};

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

	return (
		<article className={cn('artbox')} data-name='ArtBox' style={style}>
			<div className={cn('art-wrapper')}>
				{state.type === 'image' ? <img alt='art' className={cn('art', state.type)} src={state.url} style={style} /> : null}
				{state.type === 'video' ? <video className={cn('art', state.type)} src={state.url} style={style} autoPlay loop muted /> : null}

				<div className={cn('art-dimmer')} style={style} />
			</div>

			<div className={cn('text-wrapper')}>
				<h1 className={cn('text', 'title')}>{state.title}</h1>
				<h3 className={cn('text', 'subtitle')}>{state.subtitle}</h3>
			</div>

			<button className={cn('button')} onClick={handleChangeClick}>
				<FiRefreshCw />
			</button>
		</article>
	);
}