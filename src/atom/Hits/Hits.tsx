/**
 * Hits 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.13 Sat 13:22:35
 */

import { HitsProps } from './Hits.types';

/**
 * Hits 컴포넌트 JSX 반환 메서드
 *
 * @param {HitsProps} param0: HitsProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Hits({ url, bgCount, bgTitle, icon, iconColor, edgeFlat, ...props }: HitsProps): JSX.Element
{
	let src = `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${encodeURIComponent(url)}`;

	// bgCount가 유효할 경우
	if (bgCount)
	{
		src += `&count_bg=${encodeURIComponent(bgCount)}`;
	}

	// bgTitle가 유효할 경우
	if (bgTitle)
	{
		src += `&title_bg=${encodeURIComponent(bgTitle)}`;
	}

	// icon이 유효할 경우
	if (icon)
	{
		src += `&icon=${encodeURIComponent(icon.toLowerCase())}`;

		// 마지막에 .svg가 없을 경우
		if (!icon.endsWith('.svg'))
		{
			src += '.svg';
		}
	}

	// iconColor가 유효할 경우
	if (iconColor)
	{
		src += `&icon_color=${encodeURIComponent(iconColor)}`;
	}

	// edgeFlat이 유효할 경우
	if (edgeFlat)
	{
		src += `&edge_flat=${encodeURIComponent(edgeFlat)}`;
	}

	return (
		<img alt={url} data-component='Hits' src={src} title={url} {...props} />
	);
}