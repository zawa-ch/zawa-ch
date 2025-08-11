<template>
	<ArticlePageTemplate title="About">
		<CardView>
			<ArticleParagraph>
				<p>
					いつも眠そうにしている、サーバー「<a href="https://geoplanetary.net">じおぷらねたりー</a>」の管理者。<br />
					なんにでも手を付ける。<s>そしてすぐ飽きる。</s><br />
					なんの気もなく受けた応用情報技術者試験には合格している。
				</p>
				<dl>
					<dt>誕生日</dt>
					<dd>7月3日 ♋</dd>
					<dt>在住</dt>
					<dd><code>ja</code> 日本</dd>
					<dt>主言語</dt>
					<dd><code>ja_JP</code> 日本語</dd>
					<dt>出身</dt>
					<dd>北海道</dd>
				</dl>
			</ArticleParagraph>
		</CardView>
		<CardView>
			<ArticleParagraph title="せいかく" :foldable="true">
				<ul>
					<li>モチベーションはどこかに置いてきている</li>
					<li>やる気が出ると燃え尽きるまで突き進む</li>
					<li>ものごとの「なぜ」に重心を置く</li>
					<li>完璧主義/優柔不断/軸はブレない</li>
					<li>空気が読めないわけではないが足並みは合わせない</li>
				</ul>
				<RouterLink to="/about/personality">もっと！</RouterLink>
			</ArticleParagraph>
		</CardView>
		<CardView>
			<ArticleParagraph title="できること" :foldable="true">
				<p>主にできること</p>
				<ul>
					<li>C++ ソフトウェア開発</li>
					<li>Bash スクリプト開発</li>
					<li>Docker + Docker Compose コンテナ構築</li>
				</ul>
				<RouterLink to="/about/stacks">もっと！</RouterLink>
			</ArticleParagraph>
		</CardView>
		<CardView>
			<ArticleParagraph title="すきなもの" :foldable="true">
				<dl>
					<dt>ミルクティー</dt>
					<dd>
						zawa-ch.の主成分。月に20リットル以上は摂取しているともっぱらの噂。<br />
						特に<a href="https://products.kirin.co.jp/softdrink/softdrink/detail.html?id=7875">キリン 午後の紅茶
							ミルクティー</a>を与えると喜ぶ。
					</dd>
				</dl>
				<RouterLink to="/about/likes">もっと！</RouterLink>
			</ArticleParagraph>
		</CardView>
		<RouterLink to="/about/faq">
			<CardView>
				<div style="font-size: 1.5rem; font-weight: 600;">FAQ</div>
			</CardView>
		</RouterLink>
	</ArticlePageTemplate>
</template>

<script setup>
import ArticlePageTemplate from '@/components/ArticlePageTemplate.vue';
import ArticleParagraph from '@/components/ArticleParagraphTemplate.vue';
import CardView from '@/components/CardView.vue';

</script>

<style scoped></style>
