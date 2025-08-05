<template>
	<ArticlePage title="できること">
		<CardView>
			<ArticleParagraph title="システム開発">
				<p>
					zawa-ch.のメイン要素。これでご飯食べようとしていた時期がありました<br />
					いろんな有象無象を生み出しているし、手を付けて途中で放ってるやつなんかも山ほどある
				</p>
				<p>
					成果例
				</p>
				<ul>
					<li>Misskey サーバー「<a href="https://geoplanetary.net">じおぷらねたりー</a>」の運用</li>
					<li><a href="https://github.com/misskey-dev/misskey">Misskey</a> の改造、および貢献</li>
				</ul>
				<FolderView title="開発ターゲット">
					<ProgressGauge label="GNU/Linux" :min="0.5" :max="5" :value="2.3" />
					<ProgressGauge label="Windows" :min="0.5" :max="5" :value="2.0" />
					<ProgressGauge label="Embed" :min="0.5" :max="5" :value="2.0" />
					<ProgressGauge label="Network" :min="0.5" :max="5" :value="1.8" />
					<ProgressGauge label="WWW/Backend" :min="0.5" :max="5" :value="1.8" />
					<ProgressGauge label="WWW/Frontend" :min="0.5" :max="5" :value="1.1" />
				</FolderView>
				<FolderView title="開発言語">
					<ProgressGauge label="C++" :min="0.5" :max="5" :value="3.6" />
					<ProgressGauge label="AiScript" :min="0.5" :max="5" :value="3.2" />
					<ProgressGauge label="jq" :min="0.5" :max="5" :value="3.0" />
					<ProgressGauge label="Bash" :min="0.5" :max="5" :value="2.9" />
					<ProgressGauge label="C" :min="0.5" :max="5" :value="2.1" />
					<ProgressGauge label="Docker Compose" :min="0.5" :max="5" :value="2.0" />
					<ProgressGauge label="C#" :min="0.5" :max="5" :value="1.9" />
					<ProgressGauge label="TypeScript" :min="0.5" :max="5" :value="1.4" />
					<ProgressGauge label="GNU Make" :min="0.5" :max="5" :value="1.4" />
					<ProgressGauge label="HTML(w/CSS+JS)" :min="0.5" :max="5" :value="1.4" />
					<ProgressGauge label="CMake" :min="0.5" :max="5" :value="1.4" />
					<ProgressGauge label="SQL" :min="0.5" :max="5" :value="1.4" />
					<ProgressGauge label="Go" :min="0.5" :max="5" :value="1.1" />
					<ProgressGauge label="Rust" :min="0.5" :max="5" :value="1.1" />
					<ProgressGauge label="Ruby" :min="0.5" :max="5" :value="1.0" />
					<ProgressGauge label="Java" :min="0.5" :max="5" :value="1.0" />
					<ProgressGauge label="Python" :min="0.5" :max="5" :value="1.0" />
					<ProgressGauge label="Brainfuck" :min="0.5" :max="5" :value="1.0" />
				</FolderView>
				<FolderView title="フレームワーク">
					<ProgressGauge label=".NET" :min="0.5" :max="5" :value="1.9" />
					<ProgressGauge label="Docker(w/Compose)" :min="0.5" :max="5" :value="1.9" />
					<ProgressGauge label="Vue.js" :min="0.5" :max="5" :value="1.5" />
					<ProgressGauge label="Qt" :min="0.5" :max="5" :value="1.2" />
					<ProgressGauge label="LLVM" :min="0.5" :max="5" :value="1.2" />
					<ProgressGauge label="Delphi" :min="0.5" :max="5" :value="1.2" />
					<ProgressGauge label="jekyll" :min="0.5" :max="5" :value="1.0" />
				</FolderView>
			</ArticleParagraph>
		</CardView>
		<CardView>
			<ArticleParagraph title="創作活動">
				<ul>
					<li>
						<ProgressGauge label="お絵描き" :min="0.5" :max="5" :value="1.8" />
						<div>基本自分がほしいと思わないと筆をもたない</div>
					</li>
					<li>
						<ProgressGauge label="ロゴデザイン" :min="0.5" :max="5" :value="1.5" />
						<div>成果例</div>
						<ul>
							<li>サークル「<a href="https://stellar-drop.info">すてらどろっぷ</a>」ロゴ</li>
							<li><a href="https://geoplanetary.net">じおぷらねたりー</a>の一部アイコン</li>
						</ul>
					</li>
					<li>
						<ProgressGauge label="動画編集" :min="0.5" :max="5" :value="1.2" />
						<div>まれにやるらしい</div>
					</li>
					<li>
						<ProgressGauge label="作曲" :min="0.5" :max="5" :value="1.0" />
						<div>できるようになりたい……かも</div>
					</li>
				</ul>
			</ArticleParagraph>
		</CardView>
	</ArticlePage>
</template>

<script setup lang="ts">
import ArticlePage from '@/components/ArticlePageTemplate.vue';
import ArticleParagraph from '@/components/ArticleParagraphTemplate.vue';
import CardView from '@/components/CardView.vue';
import FolderView from '@/components/FolderView.vue';
import ProgressGauge from '@/components/ProgressGauge.vue';

</script>

<style scoped></style>
