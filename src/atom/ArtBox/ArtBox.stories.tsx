/**
 * 아트박스 Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.11 Mon 00:59:47
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ArtBox, { ArtBoxProps } from '.';

export default {
	component: ArtBox,
	title: 'Atom/ArtBox'
} as ComponentMeta<typeof ArtBox>;

/**
 * 템플릿 반환 메서드
 *
 * @param {ArtBoxProps} args: ArtBoxProps 인터페이스
 *
 * @returns {ComponentStory<typeof ArtBox>} ComponentStory 객체
 */
function getTemplate(args: ArtBoxProps): ComponentStory<typeof ArtBox>
{
	return (
		<ArtBox {...args} />
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	media: [
		{
			subtitle: 'DM',
			title: '어떡해 너와 나, 이렇게 가까이',
			type: 'video',
			url: 'https://user-images.githubusercontent.com/50317129/168126184-6234b129-08ce-4da0-9ff9-7f346fdd6045.mp4'
		},
		{
			subtitle: 'Panorama',
			title: '내맘 변하지 않아',
			type: 'video',
			url: 'https://user-images.githubusercontent.com/50317129/146303669-c3e5ece9-dba0-42ab-bd4c-a18ec7ce62d5.mp4'
		},
		{
			subtitle: '서울의 밤',
			title: '도망치는 거야, 저 멀리 그대여 저 멀리 멀리로.',
			type: 'video',
			url: 'https://user-images.githubusercontent.com/50317129/168413361-6cb42f92-8f2c-4cf1-a00e-4a7edc57992c.mp4'
		},
		{
			subtitle: 'Can I love you',
			title: '오늘 너의 입술에 어떤 색을 남길지',
			type: 'video',
			url: 'https://user-images.githubusercontent.com/50317129/146303814-2736dc05-ed07-4884-9cb9-d71df4df65e9.mp4'
		}
	]
} as ArtBoxProps;