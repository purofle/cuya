module.exports = {
	title: 'Cuya',
	theme: 'reco',
	themeConfig: {
		author: "purofle",
		logo: "/head.png",
		authorAvatar: "/head.png",
		type: 'blog',
		// 博客配置
		blogConfig: {
			category: {
				location: 2,     // 在导航栏菜单中所占的位置，默认2
				text: 'Category' // 默认文案 “分类”
			},
			tag: {
				location: 3,     // 在导航栏菜单中所占的位置，默认2
				text: 'Tag'      // 默认文案 “标签”
			}
		},
		nav: [
			{ text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
		],
	},
	plugins: [
		[
			'@maginapp/vuepress-plugin-katex',
			{
				delimiters: 'dollars'
			},
		],
	],
}
