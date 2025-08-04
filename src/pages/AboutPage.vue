<template>
	<ArticlePageTemplate title="About">
		<CardView>
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
		</CardView>
		<CardView title="せいかく" :foldable="true">
			<ul>
				<li>モチベーションはどこかに置いてきている</li>
				<li>やる気が出ると燃え尽きるまで突き進む</li>
				<li>ものごとの「なぜ」に重心を置く</li>
				<li>完璧主義/優柔不断/軸はブレない</li>
				<li>空気が読めないわけではないが足並みは合わせない</li>
			</ul>
			<RouterLink to="/about/personality">もっと！</RouterLink>
		</CardView>
		<CardView title="できること" :foldable="true">
			<p>主にできること</p>
			<ul>
				<li>C++ ソフトウェア開発</li>
				<li>Bash スクリプト開発</li>
				<li>Docker + Docker Compose コンテナ構築</li>
			</ul>
		</CardView>
		<CardView title="すきなもの" :foldable="true">
			<dl>
				<dt>ミルクティー</dt>
				<dd>
					zawa-ch.の主成分。月に20リットル以上は摂取しているともっぱらの噂。<br />
					特に<a href="https://products.kirin.co.jp/softdrink/softdrink/detail.html?id=7875">キリン 午後の紅茶
						ミルクティー</a>を与えると喜ぶ。
				</dd>
			</dl>
		</CardView>
		<RouterLink to="/about/faq">
			<CardView title="FAQ" />
		</RouterLink>
		<CardView title="このサイトについて">
			<h3>プライバシー</h3>
			<p>
				このサイトでは、ユーザーが直接入力したもの、およびサイトアクセスに必要なものを除き、保存・使用される情報(トラッキングCookieなど)はありません。
			</p>
			<h3>このサイトの開発環境</h3>
			<p>
				このサイトは <a href="https://vuejs.org/">Vue.js</a> <code>{{ version }}</code> を用いて構築しています。<br />
				そのため、このサイトの閲覧には必然的に JavaScript を有効化する必要があります。
			</p>
			<p>なお、このサイトは次のウェブブラウザからのアクセスを想定しています:</p>
			<ul>
				<li>Mozilla Firefox (Latest)</li>
				<li>Google Chrome (Latest)</li>
			</ul>
			<h3>著作権</h3>
			<p>
				Copyright 2025 zawa-ch.
			</p>
			<p>
				このサイトは<a target="_blank"
					href="https://github.com/zawa-ch/zawa-ch/blob/master/LICENSE.md">既定のライセンス</a>の下で公開されています。
			</p>
		</CardView>
	</ArticlePageTemplate>
</template>

<script setup>
import ArticlePageTemplate from '@/components/ArticlePageTemplate.vue';
import CardView from '@/components/ArticleParagraphTemplate.vue';
import { version } from 'vue';

</script>

<style scoped></style>
