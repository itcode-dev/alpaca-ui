/**
 * Utterances 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.08.15 Mon 04:49:44
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type UtterancesIssueTerm = 'pathname' | 'url' | 'title' | 'og:title'
export type UtterancesTheme = 'github-light' | 'github-dark' | 'preferred-color-scheme' | 'github-dark-orange' | 'icy-dark' | 'dark-blue' | 'photon-dark' | 'boxy-light' | 'gruvbox-dark'

export interface UtterancesProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'>
{
	repo: string
	issueTerm: string | UtterancesIssueTerm
	label?: string
	theme?: UtterancesTheme
}