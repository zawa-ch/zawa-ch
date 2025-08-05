<template>
	<ArticlePage title="Links">
		<ArticleParagraph title="ソーシャルネットワーク">
			<LinkCard label="じおぷらねたりー" href="https://geoplanetary.net/@stellar_ch"
				banner-url="https://geoplanetary.net/files/4ceb7826-1027-43dd-aee3-3c9502352e1f" />
			<LinkCard label="ほわほわCaramella" href="https://caramella.casa/@stellar_ch"
				banner-url="https://s3.caramella.casa/caramella/media/e6f40c24-8edf-4f9a-9419-2f814675c49d.png" />
			<LinkCard label="GitHub" href="https://github.com/zawa-ch" />
			<LinkCard label="pixiv" href="https://www.pixiv.net/users/10244858" banner-url="/assets/202008061953.png" />
			<LinkCard label="Keybase" href="https://keybase.io/zawa_ch" />
			<FolderView title="Fediverse" :expanding="false">
				<ul>
					<li><a target="_blank" href="https://misskey.04.si/@stellar_ch">りんごぱい</a></li>
					<li><a target="_blank" href="https://rhythmisskey.games/@stellar_ch">りずみすきー</a></li>
					<li><a target="_blank" href="https://bsky.app/profile/stellar-ch.stellar-drop.info">Bluesky</a></li>
					<li><a target="_blank" href="https://misskey.io/@stellar_ch">Misskey.io</a></li>
					<li><a target="_blank" href="https://misskey.systems/@stellar_ch">みすてむず</a></li>
					<li><a target="_blank" href="https://calc.04.si/">みかんぱい</a></li>
					<li><a target="_blank" href="https://sushi.ski/@stellar_ch">すしすきー</a></li>
					<li><a target="_blank" href="https://misskey.gg/@stellar_ch">Misskey.gg</a></li>
					<li><a target="_blank" href="https://mi.mashiro.site/@stellar_ch">みすほわいと</a></li>
					<li><a target="_blank" href="https://moriskaya.xsns.jp/@stellar_ch">мориская</a></li>
					<li><a target="_blank" href="https://mstdn.jp/@stellar_ch">mstdn.jp</a></li>
					<li><a target="_blank" href="https://pawoo.net/@stellar_ch">Pawoo</a></li>
				</ul>
			</FolderView>
			<FolderView title="そのほか" :expanding="false">
				<ul>
					<li>Discord: @stellar_ch</li>
					<li><a target="_blank" href="https://mixi.social/@stellar_ch">mixi2</a></li>
				</ul>
			</FolderView>
		</ArticleParagraph>
		<ArticleParagraph title="めだちたGirl">
			<LinkCard label="お題箱" href="https://odaibako.net/u/stellar_ch" />
			<LinkCard label="Wavebox" href="https://wavebox.me/wave/4hkr8gpwyfsknhh2/" />
			<LinkCard label="マシュマロ" href="https://marshmallow-qa.com/stellar_ch" />
		</ArticleParagraph>
		<ArticleParagraph title="サークル活動">
			<CardView>
				Note: 2021年のC99以降、無期限で活動を休止しています
			</CardView>
			<LinkCard label="サークルHP" href="https://www.stellar-drop.info/" />
			<LinkCard label="circle.ms" href="https://portal.circle.ms/Circle/Index/10414285" />
			<LinkCard label="Booth" href="https://stellar-drop.booth.pm/" />
		</ArticleParagraph>
		<ArticleParagraph title="外部リンク">
			<CardView>
				zawa-ch.が管理していないサイトへのリンクとなるため、リンク切れ等はご容赦ください。<br />
				このサイトはリンクフリーです。<br />
			</CardView>
			<LinkCard label="ねばーらんど.F" href="https://neverland-f.com/"
				banner-url="https://neverland-f.com/img/neverlandf_banner1.f69c77f1.png" />
		</ArticleParagraph>
	</ArticlePage>
</template>

<script setup>
import ArticlePage from '@/components/ArticlePageTemplate.vue';
import ArticleParagraph from '@/components/ArticleParagraphTemplate.vue';
import CardView from '@/components/CardView.vue';
import FolderView from '@/components/FolderView.vue';
import LinkCard from '@/components/LinkCard.vue';

</script>

<style scoped></style>
