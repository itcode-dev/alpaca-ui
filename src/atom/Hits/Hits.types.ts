/**
 * Hits 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.08.13 Sat 13:23:22
 */

import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface HitsProps extends Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'alt' | 'src' | 'title'>
{
	url: string
	bgCount?: CSSProperties['color']
	bgTitle?: CSSProperties['backgroundColor']
	icon?: string
	iconColor?: CSSProperties['color']
	edgeFlat?: boolean
}

/**
 * https://hits.seeyoufarm.com/api/count/incr/badge.svg
 * ?url=https%3A%2F%2Fblog.itcode.dev%2Fposts%2F2022-07-25-tesla-model3%2F2022%2F07%2F25%2Ftesla-model3
 * &count_bg=%23555555
 * &title_bg=%23555555
 * &icon=react.svg
 * &icon_color=%2348CAF7
 * &title=hits
 * &edge_flat=false
 *
 */