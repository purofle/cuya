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
	head: [
		["script", {}, `
		    (function(c,l,a,r,i,t,y){
				        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
				        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
				        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
				    })(window, document, "clarity", "script", "67lcinyzig");
	`]
	]
}
