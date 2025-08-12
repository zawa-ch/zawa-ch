<template>
	<ArticlePageTemplate title="このサイトについて">
		<CardView>
			<ArticleParagraph title="プライバシー">
				<p>
					このサイトでは、ユーザーが直接入力したもの、およびサイトアクセスに必要なものを除き、保存・使用される情報(トラッキングCookieなど)はありません。
				</p>
			</ArticleParagraph>
		</CardView>
		<CardView>
			<ArticleParagraph title="リンク">
				<p>
					このサイトはリンクフリーです。<br />
					リンク先はサイト内のどこであってもよい(MAY)ですが、リソース移動などによるリンク切れを避けるためにも、トップページへリンクすることをおすすめします。
				</p>
			</ArticleParagraph>
		</CardView>
		<CardView>
			<ArticleParagraph title="このサイトの開発環境">
				<p>
					このサイトは <a href="https://vuejs.org/">Vue.js</a> <code>{{ version }}</code> を用いて構築しています。<br />
					そのため、このサイトの閲覧には必然的に JavaScript を有効化する必要があります。
				</p>
				<p>なお、このサイトは次のウェブブラウザからのアクセスを想定しています:</p>
				<ul>
					<li>Mozilla Firefox (PC, Latest)</li>
					<li>Google Chrome (PC, Latest)</li>
				</ul>
				<p>
					このサイトに不具合・欠陥を見つけた場合は、GitHub Issueにてお知らせください。
				</p>
				<a target="_blank" href="https://github.com/zawa-ch/zawa-ch/issues/new/choose">サイトの不具合・欠陥報告</a>
			</ArticleParagraph>
		</CardView>
		<CardView>
			<ArticleParagraph title="著作権">
				<p>
					Copyright 2025 zawa-ch.
				</p>
				<p>
					このサイトは<a target="_blank"
						href="https://github.com/zawa-ch/zawa-ch/blob/master/LICENSE.md">既定のライセンス</a>の下で公開されています。
				</p>
			</ArticleParagraph>
		</CardView>
	</ArticlePageTemplate>
</template>

<script setup>
import ArticlePageTemplate from '@/components/ArticlePageTemplate.vue';
import ArticleParagraph from '@/components/ArticleParagraphTemplate.vue';
import CardView from '@/components/CardView.vue';
import { version } from 'vue';

</script>

<style scoped></style>
