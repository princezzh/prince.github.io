$(()=>{
	
	// 渲染导航栏：
	$(".banner").append(`
	
		<div class="nav">
			<h2>千与千寻</h2>
			<div class="as">
				<a href="index.html">千寻首页</a>
				<a href="Pages/01_Juqing.html">剧情简介</a>
				<a href=""Pages/02_Renwu.html">人物介绍</a>
				<a href=""Pages/03_Taici.html">作者简介</a>
				<a href=""Pages/04_Login.html">登录注册</a>
			</div>
		</div>
	
	`)
	
	
	// 渲染footer部分:
	$(".footer").append(`
	
		
		<h2>千与千寻</h2>
		
		<div class="copyright">
			千与千寻@2024.LOVE YOU  所有
		</div>
	
	`)
	
})